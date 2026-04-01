'use strict';

const API_KEY  = '157d1b72';
const BASE_URL = 'https://www.omdbapi.com/';

const container = document.getElementById("movieContainer");
const message = document.getElementById("message");

async function searchMovies() {
    const query = document.getElementById("searchInput").value;

    if (!query) {
        message.textContent = "Enter a movie name!";
        return;
    }

    message.textContent = "Loading...";
    container.innerHTML = "";

    try {
        // ✅ Using YOUR API format
        const url = new URL(BASE_URL);
        url.searchParams.set('apikey', API_KEY);
        url.searchParams.set('s', query);

        const response = await fetch(url.toString());
        const data = await response.json();

        if (data.Response === "False") {
            message.textContent = "No movies found!";
            return;
        }

        message.textContent = "";

        displayMovies(data.Search);

    } catch (error) {
        message.textContent = "Error fetching data!";
    }
}

function displayMovies(movies) {
    container.innerHTML = "";

    movies.map(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        container.appendChild(card);
    });
}