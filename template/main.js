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
const visibleFilm = document.getElementById('movies')
const movieNotFound = document.getElementById('movie_not_found')

const id = num => Math.floor(Math.random() * num)


function getMovie() {

  fetch(`${BASE_URL}${id(100)}?${API_KEY}&${language}`)
    .then(response => {
      if (response.status === 404) {
        movieNotFound.classList.remove('display-none')
        movieNotFound.classList.add('movie_not_found')
        visibleFilm.classList.add('display-none')
        visibleFilm.classList.remove('movies')
      } else {
        movieNotFound.classList.add('display-none')
        movieNotFound.classList.remove('movie_not_found')
        visibleFilm.classList.remove('display-none')
        visibleFilm.classList.add('movies')
      }
      return response.json()
      
    })
    .then(data => {
      movie_poster.src = `${IMG_URL}${data.poster_path}`
      movie_title.textContent = data.title
      movie_description.textContent = data.overview

    })
    .catch(error => {
      console.error(error)
    })
}