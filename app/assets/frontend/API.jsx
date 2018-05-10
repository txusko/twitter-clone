import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log(2, 'API.getAllTweets');
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
    .success( data => ServerActions.receivedUsers(data) )
    .error(error => console.log(error));
  },
  followUser(userId) {
    $.post("/followers/follow", { user_id: userId })
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower) )
    .error(error => console.log(error));
  },
  unfollowUser(userId) {
    $.post("/followers/unfollow", { user_id: userId })
    //.success( follower_id => ServerActions.deleteOneFollower(follower_id) )
    .success( rawFollower => ServerActions.deleteOneFollower(rawFollower) )
    .error(error => console.log(error));
  }
}
