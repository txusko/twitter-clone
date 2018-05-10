import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from './AppEventEmitter';

let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
  getAll() {
    console.log('UserEventEmitter1', _users, _followedIds);
    let ret = _users.map(user => {
      user.following = _followedIds.indexOf(user.id) >= 0;
      return user;
    });
    console.log('UserEventEmitter2', ret, _followedIds);
    return ret;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      console.log('action.data', action.data);
      _users = action.data.users;
      _followedIds = action.data.followers;
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      _followedIds.push(action.rawFollower.user_id);
      UserStore.emitChange();
      break;
    case ActionTypes.DELETED_ONE_FOLLOWER:
      var index = _followedIds.indexOf(action.rawFollower.user_id);
      _followedIds.splice(index, 1);
      UserStore.emitChange();
      break;
    default:
      // no op
  }
});

export default UserStore;
