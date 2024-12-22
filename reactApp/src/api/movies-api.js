export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=34936a8714fa773d6b399b618cd3d66d&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };