const fetch = require('node-fetch');

async function getAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);     
    

}

getAPI('https://api.adviceslip.com/advice');
getAPI('https://randomuser.me/api/');