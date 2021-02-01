// import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
// import Footer from './components/footer';
import React, {useState} from 'react';

const App = () => {

  const [name, setName] = useState('Hridoy');
  
  const changeName = () => {
    if(name == 'Hridoy'){
      setName('Hridoy Ahmed');
    }else{
      setName('Hridoy');
    }
    if(name == 'Hridoy'){
      setName('Hridoy Ahmed');
    }
  }

  return ( 
    <>
      <span>Name: {name}</span><br />
     <button onClick = {changeName}>
       Change Name
       </button>
    </>
   );
}
 

export default App;