

const k = '157d1b72';
const base = 'https://www.omdbapi.com/';

const box = document.getElementById("movieContainer");
const msg = document.getElementById("message");
const inp = document.getElementById("searchInput");
const title = document.getElementById("sectionTitle");

// Enter key search
inp.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchMovies();
    }
});

// Load default movies
window.onload = function(){
    loadDefault();
};

async function loadDefault(){
    msg.textContent = "Loading...";
    title.textContent = "New Releases";

    try {
        let u = new URL(base);
        u.searchParams.set('apikey', k);
        u.searchParams.set('s', '2024');

        const res = await fetch(u);
        const data = await res.json();

        if (data.Response === "True") {
            msg.textContent = "";
            showStuff(data.Search);
        } else {
            msg.textContent = "Couldn't load movies";
        }

    } catch (e) {
        msg.textContent = "Error loading movies";
    }
}

async function searchMovies() {
    const val = inp.value.trim();

    if (!val) {
        msg.textContent = "Type something first...";
        return;
    }

    msg.textContent = "Searching...";
    title.textContent = "Search Results";
    box.innerHTML = "";

    try {
        let u = new URL(base);
        u.searchParams.set('apikey', k);
        u.searchParams.set('s', val);

        const res = await fetch(u);
        const data = await res.json();

        if (data.Response === "False") {
            msg.textContent = "Nothing found 😅";
            return;
        }

        msg.textContent = "";
        showStuff(data.Search);

    } catch (e) {
        msg.textContent = "Something went wrong!";
    }
}

function showStuff(arr) {
    box.innerHTML = "";

    arr.forEach(x => {
        const d = document.createElement("div");
        d.className = "movie-card";

        let img = x.Poster !== "N/A"
            ? x.Poster
            : "https://via.placeholder.com/200x300?text=No+Image";

        d.innerHTML = `
            <img src="${img}">
            <h3>${x.Title}</h3>
            <p>${x.Year}</p>
        `;

        box.appendChild(d);
    });
}