import { BACKEND } from "./env";
import axios from 'axios';

axios.defaults.baseURL = BACKEND

export default axios