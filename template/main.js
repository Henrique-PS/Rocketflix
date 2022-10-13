import axios from 'axios'
import {
  API_KEY, 
  BASE_URL,
  IMG_URL,
  language,
} from './api.js'

axios
  .get(BASE_URL)
  