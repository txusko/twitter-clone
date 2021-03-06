import React from 'react';

import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetStore from '../stores/TweetStore';
import { Link } from 'react-router-dom';

import TweetActions from "../actions/TweetActions"

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, 'Index._onChange');
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <Link to="follow">follow</Link>
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
