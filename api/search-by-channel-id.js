const { default: axios } = require("axios");

const API_KEY = "";

const id = "";

const url = `https://www.googleapis.com/youtube/v3/search?channelId=${id}&part=id,snippet&key=${API_KEY}&type=video&maxResults=3`;
const get = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data.items);
  } catch(err) {
    console.log(err);
  }
}

get();