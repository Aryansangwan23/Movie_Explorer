#  Movie Explorer

##  Project Overview

Movie Explorer is a responsive web application that allows users to search and explore movies using real-time data from the OMDb API. The application provides an intuitive interface to discover movies, view details, and manage favorites.

---

##  Objective

The goal of this project is to demonstrate understanding of:

* JavaScript fundamentals
* API integration using `fetch()`
* Array Higher-Order Functions (map, filter, sort)
* Responsive UI design using CSS

---

##  Features

###  Search

* Search movies by title using real-time API data

###  Filtering

* Filter movies based on:

  * Type (Movie / Series)
  * Release Year

###  Sorting

* Sort movie results by:

  * Year (ascending / descending)
  * Title (A–Z / Z–A)

###  Favorites

* Add/remove movies to favorites
* Favorites stored using `localStorage`

###  Loading Indicator

* Displays loading state while fetching data

###  Error Handling

* Displays user-friendly messages when no results are found or API fails

###  Responsive Design

* Fully responsive across:

  * Mobile
  * Tablet
  * Desktop

---

##  API Used

**OMDb API (Open Movie Database)**
https://www.omdbapi.com/

---

##  Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Local Storage

---

##  Project Structure

```
movie-explorer/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

---

##  Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   ```

2. Navigate to the project folder:

   ```bash
   cd movie-explorer
   ```

3. Open `index.html` in your browser

---

##  API Setup

1. Get your API key from:
   https://www.omdbapi.com/apikey.aspx

2. Open `script.js`

3. Replace:

   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

4. Add your actual API key

---

##  Concepts Used

* **fetch() API** for making HTTP requests
* **Promises & async/await** for handling asynchronous operations
* **Array Higher-Order Functions:**

  * `.map()` → rendering movie data
  * `.filter()` → filtering results
  * `.sort()` → sorting data

---

##  Future Enhancements

* Pagination for large result sets
* Debounced search input
* Improved UI animations
* Movie details modal
* Infinite scrolling

---

##  Milestones

* **Milestone 1:** Project setup and planning
* **Milestone 2:** API integration
* **Milestone 3:** Core features implementation
* **Milestone 4:** Deployment and final submission

---

##  Best Practices Followed

* Clean and modular code structure
* Meaningful variable and function names
* Separation of concerns (UI, logic, API)
* Responsive design principles
* Error handling

---

##  Preview

(Add screenshots of your project here after completion)

---

##  License

This project is for educational purposes only.

---

##  Acknowledgements

* OMDb API for movie data
* Open-source community for inspiration
