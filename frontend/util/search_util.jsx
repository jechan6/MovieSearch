export const searchMovie = (title) => {
    let url = `https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=1&price_min=${min}&price_max=${max}&make=${make}`;
    return(
        fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": "cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90"
            }
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