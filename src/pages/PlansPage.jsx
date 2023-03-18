import { QuerySnapshot } from "firebase/firestore";
import React from "react";
import db from "../firebase";
import "./PlansPage.css";

const PlansPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((QuerySnapshot) => {
        const products = {};
        QuerySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("price").get();

          priceSnap.doc.forEach((price) => {
            products[productDoc.id].price = {
              proudctId: price.id,
              proudctData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  return (
    <div className="planPage">
      {Object.entries(products).map(([proudctId, proudctData]) => (
        // add some logic to check if the user's subscription is active
        <div className="planPage__plans">
          <div className="planPageInfo">
            <h5>{proudctId.name}</h5>
            <h5>{proudctData.description}</h5>
          </div>

          <button onClick={() => loadCheckOut(proudctData.data.prices.priceId)}>
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlansPage;
