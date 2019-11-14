import React from 'react';
import './App.css';

let key = process.env.REACT_APP_TREASURE_KEY

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      map: [],
      startingRoom: {},
      currentRoom: {},
      prevRoom: {},
      
    }
  }

  render(){
    return (
      <div className="App">
        <h1> hello </h1>
      </div>
    );
  }
}

export default App;
