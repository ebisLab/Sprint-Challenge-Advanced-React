import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

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
  console.log(res)
})
.catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  
  }
}

export default App;
