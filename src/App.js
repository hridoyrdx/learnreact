import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import React, {useState} from 'react';

const App = () => {

  const [name, setName] = useState('Hridoy');
  
  changeName = () => {
    setName('Hridoy Ahmed')
  }

  return ( 
    <>
      <span>Name: {name}</span>
     <button onClick = {changeName}>
       Change Name
       </button>
    </>
   );
}
 

export default App;