import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import DeckDatabase from './Components/DeckDatabase/DeckDatabase';
import store from './store';
import './App.scss';

// hacky way to import all image paths
// function importAll(r) {
//   return r.keys().map(r);
// }
// const images = importAll(require.context('./images', true, /\.(png)$/));

// console.log(images);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' render={(props) => {
              return <Home {...props} />
            }} />

            <Route path='/deck-database' component={DeckDatabase} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
