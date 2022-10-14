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
const visibleFilm = document.querySelector('.movies')
const movieNotFound = document.querySelector('.movie_not_found')

function getMovie() {

  visibleFilm.removeAttribute('style')

  fetch(`${BASE_URL}${id(999999)}?${API_KEY}`)
    .then(response => {
      if(response.status === 404){
        movieNotFound.removeAttribute('style')

      } else {response.json()}
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


