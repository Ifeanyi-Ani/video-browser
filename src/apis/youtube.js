import axios from "axios";

const KEY = "AIzaSyAIF0PCbcje9mKHkaFebmdwPLUgFBZ5DJ8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
})