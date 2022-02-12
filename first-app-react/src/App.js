// eslint-disable-next-line no-unused-vars
import React, {useState,useEffect, Components,} from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import { css } from "@emotion/react";
import  PropagateLoader  from 'react-spinners/PropagateLoader';
import Contact  from './components/contact';


function App() {
  const [loading,setloading] = useState(false)
  const override = css`
  display:bloack;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  },[])
  return (
    <div className="App">
       
{
  loading? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
  :
  <>
  <Navbar/>
  <Header/>
  <Products/>
  <Contact/>
  
  </>
}
    </div>
  );
}

export default App;
