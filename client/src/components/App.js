import React from 'react';
import ListBarang from './ListBarang';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ListBarang />
        </div>
      </div>
      <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to="/">Navigate to page one</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App; 