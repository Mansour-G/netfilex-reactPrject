import axios from 'axios';


const instace = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default instace;


// https://api.themoviedb.org/3/discover/movie?api_key=26e5b52e94c2ca3efc43ecab3dbb20ec&language=em=US