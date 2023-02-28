const { default: axios } = require("axios");

const API_KEY = "AIzaSyCfj3cPwmXHtoHVbs9kadHflg_7GZuCNKs";

const id = "Enhxa_MKN1Q";

const url = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,statistics,status&key=${API_KEY}&id=${id}`;
const get = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
  } catch(err) {
    console.log(err);
  }
}

get();