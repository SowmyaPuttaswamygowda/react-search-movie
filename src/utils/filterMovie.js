const filterMovie = (data, input) => {
    if (!input.trim()) {
        return data;
    } else {
        return data.filter((movie) =>
            movie.Title.toLowerCase().includes(input.trim())
    );
    }
};

export default filterMovie;