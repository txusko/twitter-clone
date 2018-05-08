import API from "../API"

export default {
  getAllTweets() {
    console.log('API.getAllTweets');
    API.getAllTweets();
  },
  sendTweet(body) {
    API.createTweet(body);
  }
}
