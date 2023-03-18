//import axios from 'axios';
const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
async function getAPI(url) {
    const res = await axios.get(url);
    let data = res.data;
    console.log(data);

};
getAPI('https://randomuser.me/api/');
getAPI('https://api.adviceslip.com/advice');