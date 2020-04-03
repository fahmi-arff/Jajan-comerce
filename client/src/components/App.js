import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import JList from './jajanOnlen/JList';
import JCheckout from './jajanOnlen/JCheckout';
import JDetail from './jajanOnlen/JDetail';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={JList} />
          <Route path="/jajan/detail/:id" exact component={JDetail} />
          <Route path="/jajan/checkout" exact component={JCheckout} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App; 