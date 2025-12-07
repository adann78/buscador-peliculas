const apiKey ='02dd9b0b942942900fee5f905b0e1e39'
document.getElementById('searchButton').addEventListener('click', searchMovies) 

function searchMovies() {
    let searchInput=document.getElementById('searchInput').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let movies = data.results;
        let moviesContainer = document.getElementById('results');
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Release Date: ${movie.release_date}</p>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster"/>
            `;
            moviesContainer.appendChild(movieDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}