import axios from 'axios';
import cookie from "react-cookies";
import { backend_url } from './config';
var csrftoken =  cookie.load('csrftoken');

const apiInstance = axios.create({
    baseURL: backend_url,
    timeout: 5000, // timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRFToken': csrftoken,
    },
});

export default apiInstance;