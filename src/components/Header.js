import React from 'react';
import logo from '../words.jpg';

export default function Header(){
    return(
    <div>
    <h1> Word Bank </h1>
    <img src={logo} alt="words"/>
    </div>
    )
}