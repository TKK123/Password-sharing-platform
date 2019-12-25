import React, { Component }from 'react';
import logo from './logo.svg';
import Login from './components/login'
import './App.css';
class App extends Component {

// constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
// }

// callAPI() {
//     fetch("http://localhost:9000/api")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }))
//         .catch(err => err);
// }

// componentWillMount() {
//     this.callAPI();
// }
  
  
  render(){
  return (
    <div className="App">

      <Login />
    </div>
  );
  }
}

export default App;
