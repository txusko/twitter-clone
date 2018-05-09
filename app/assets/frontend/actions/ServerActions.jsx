import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    console.log(3, 'ServerActions.receivedTweets');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    });
  },
  receivedOneTweet(rawTweet) {
    console.log('ServerActions.receivedOneTweet');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet: rawTweet
    });
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers: rawUsers
    });
  },
  receivedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower: rawFollower
    });
  }
}
