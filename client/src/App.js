import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Players from './Components/Players';
import {Navigation} from './Components/Navigation'
import {useLocalStorage} from './Hooks/useLocalStorage'

class App extends Component {

  constructor(){
    super();
    this.state={
      players: []
    }
  }

  componentDidMount(){
axios
.get(`http://localhost:5000/api/players`)
.then(res=>{
  // console.log(res)
  // console.log('res.data', res.data)
  this.setState({players: res.data})
})
.catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="App">
<Navigation />
        {this.state.players.map(player => <Players key={player.id} player={player} />)}
      </div>
    );
  
  }
}

export default App;
