export const searchMovie = (title, page) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=cb2907588f57a58205bc7f27c38e19d4&language=en-US&query=${title}&page=${page}`;
    return(
        fetch(url, {
            method: "GET",
        }).then(res => res.json())
    );
}

export const searchMovies = (page) => {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=cb2907588f57a58205bc7f27c38e19d4&language=en-US&page=" + page;
    return(
        fetch(url, {
            method: "GET",
        }).then(res => res.json())
    );
}