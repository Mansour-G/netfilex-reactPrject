const API_KEY = "26e5b52e94c2ca3efc43ecab3dbb20ec";


const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=em=US`,
  // fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  // fetchTrending: `/movie/popular?api_key=26e5b52e94c2ca3efc43ecab3dbb20ec&language=en-US&page=55`,
  // fetchNetflixOrignials: `/discover/movie?api_key=${API_KEY}&with_networks=213`,


  fetchTrending: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOrignials: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`, // Science Fiction
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=revenue.desc`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,// Dramaaaaa
  fetchKidseMovies: `/discover/movie?api_key=${API_KEY}certification.lte=G`,// Dramaaaaa




  // fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=em=US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`, // Science Fiction






  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  // fetchHonorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  // fetchDocumantries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
}



export default requests;