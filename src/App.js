import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
            <h1>Login Page</h1>
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
