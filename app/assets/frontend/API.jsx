import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log('API.getAllTweets');
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    console.log('API.createTweet');
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet) )
    .error(error => console.log(error));
  },
  getAllUsers() {
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
    .error(error => console.log(error));
  }
}
