import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Houses from './Houses';



class App extends Component {

  state = {
    "multiplier" : 1,
    "clicks" : 0 ,
    "updgrade" : 0,
    "houses" : 0
  }

  goals = [30, 50, 100, 400, 1000, 3000]
  houseCost = [50, 100, 200, 500, 1000, 2000]

  addClick = () => {
    this.setState( (prevState, props) => {
      return {"clicks" : prevState.clicks + prevState.multiplier};
    });
  }

  addMultiplier = () => {
    this.goals.shift();
    this.setState( (prevState, props) => {
      return {"multiplier" : prevState.multiplier + 1, "clicks" : 0};
    });
  }

  addHouse = () => {
    const cost = this.houseCost.shift();
    this.setState( (prevState, props) => {
      return {"houses" : prevState.houses + 1, "clicks" : prevState.clicks - cost};
    });
  }

  render() {
    return (
      <div className="App">
        <Display display={"Balance: " + this.state.clicks}/>
        <Display display={"Your multiplier: " + this.state.multiplier}/>
        <button className="button" onClick={this.addClick}>Make money!</button>

        {(this.goals[0] <= this.state.clicks) &&
          <button className="button" onClick={this.addMultiplier}>Increase your multiplier! (Resets your balance!)</button>
        }

        {(this.state.clicks >= this.houseCost[0]) &&
          <button className="button" onClick={this.addHouse}>Buy house! ({this.houseCost[0]})</button>
        }

        <Houses amount={this.state.houses}/>
      </div>
    );
  }
}

export default App;
