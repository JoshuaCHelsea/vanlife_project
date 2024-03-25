import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export default function Navbar(){
    return(
        <nav>
            <Link to="/">#VANLIFE</Link>
            <div>
                <Link to="/about">About</Link>
                <Link to="/">Vans</Link>
            </div>
        </nav>
    )
}