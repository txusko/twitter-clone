import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Index from './components/Index';
import Follow from './components/Follow';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/follow" component={Follow} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    )
  }
}

let documentReady = () => {
  const reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(
      <HashRouter>
        <Route component={App} />
      </HashRouter>
      , reactNode);
  }
};

$(documentReady)
