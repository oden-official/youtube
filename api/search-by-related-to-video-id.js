const { default: axios } = require("axios");

const API_KEY = "AIzaSyCfj3cPwmXHtoHVbs9kadHflg_7GZuCNKs";

const id = "Enhxa_MKN1Q";

const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&part=id,snippet&key=${API_KEY}&type=video&maxResults=3`;
const get = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
  } catch(err) {
    console.log(err);
  }
}

get();