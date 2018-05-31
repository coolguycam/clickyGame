import React, {Component} from "react";
import Game from './components/Game';
require('./assets/app.scss');

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
