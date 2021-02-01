import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import React, {Component} from 'react';

class App extends Component {
  state = { 
    name: 'Hridoy',
    age: 24,
    lavel: 'Intermediet',
    adrress: {
      city: 'Dhaka',
      zip: 1206
    }
   }

   changeLavel = () =>{

    if(this.state.lavel === "Intermediet"){
      this.setState({
        lavel: "Advance"
      })
    }else{
      this.setState({
        lavel: "Intermediet"
      })
    }

   }

  render() { 
    return (
      <>
       <span>Name: {this.state.name}</span><br />
       <span>Age: {this.state.age}</span><br />
       <span>lavle: {this.state.lavel}</span><br />
       <button onClick={this.changeLavel}>
         Change Lavel
       </button>
      </>
     );
  }

}
 
export default App;
