
import axios from "axios";
export const key = "ce0e16d4b733e45d67ad972327833b5d0da44b56"

const api= axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
});

export default api;