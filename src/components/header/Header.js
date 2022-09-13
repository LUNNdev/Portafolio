import React from 'react';
import perro from '../../img/perro.jpg';
import  {AiFillAccountBook} from "react-icons/ai";
import './Header.css';
import {button} from "react-bootstrap/button"
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return(
    <div className='header'>
      <p>hola</p>
      <img src={perro}/>
      <AiFillAccountBook/>
      <button>hola</button>
    </div>

  )
}

export default Header;