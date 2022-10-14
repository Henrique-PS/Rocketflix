// import {
//   API_KEY, 
//   BASE_URL,
//   IMG_URL,
//   language,
// } from './api.js'

const API_KEY = 'api_key=4a8b501b2a2c0caf295cbf61dacbcaa0'
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const language = 'language=pt-BR'
const id = (num) => Math.floor(Math.random() * num)


function getFilm() {

  fetch(`${BASE_URL}${id(999999)}?${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      film_poster.src = `${IMG_URL}${data.poster_path}`
      film_title.textContent = data.original_title
      film_description.textContent = data.overview
    })
    .catch(error => console.error(error))
}

getFilm()


// function updateFilm() {
//   fetch(BASE_URL, {
//     method: 'PUT',
//     body: JSON.stringify(updatedFilm), 
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(response => response.json())
//     .catch(error => console.error(error))
// }

// const updatedFilm = {
//   // poster_path: `${IMG_URL}${poster_path}`,
//   original_language: `${language}`
// }