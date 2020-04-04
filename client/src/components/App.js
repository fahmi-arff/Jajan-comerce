import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import JList from './jajanOnlen/JList';
import JCheckout from './jajanOnlen/JCheckout';
import JDetail from './jajanOnlen/JDetail';
import Header from './Header';
import CreateProfile from './profileOnlen/CreateProfile';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={JList} />
            <Route path="/jajan/detail/:id" exact component={JDetail} />
            <Route path="/jajan/checkout" exact component={JCheckout} />
            <Route path="/profile/create" exact component={CreateProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App; 