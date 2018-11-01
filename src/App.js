import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import Home from './Components/Home/Home';
import DeckDatabase from './Components/DeckDatabase/DeckDatabase';
import DeckSearch from './Components/DeckSearch/DeckSearch';
import AddPage from './Components/AddPage/AddPage';
import GuidePage from './Components/GuidePage/GuidePage';
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
    return <Provider store={store}>
        <div className="App">
          <NavBarContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/decks" component={DeckDatabase} />
            <Route path="/search" component={DeckSearch} />
            <Route path="/guides" component={GuidePage} />
            <Route path="/add" component={AddPage} />
          </Switch>
        </div>
      </Provider>;
  }
}

export default App;
