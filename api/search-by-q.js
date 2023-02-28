const { default: axios } = require("axios");

const API_KEY = "AIzaSyCfj3cPwmXHtoHVbs9kadHflg_7GZuCNKs";

const q = "캠핑";

const url = `https://www.googleapis.com/youtube/v3/search?q=${q}&part=id,snippet&key=${API_KEY}`;
const get = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
  } catch(err) {
    console.log(err);
  }
}

get();