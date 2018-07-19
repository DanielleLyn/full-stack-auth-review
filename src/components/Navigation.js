import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation () {
    return (
        <div className = "navigation">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/profile">profile</Link>
        <Link to="/words">words</Link>
       
            </div>
    )
}
