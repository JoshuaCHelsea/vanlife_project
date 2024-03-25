import React from "react";
import Navbar from "../Navbar";
import '../../index.css'
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home-page-container">
            <div className="homepage-contents">
                <div className="homepage-heading">You got the travel plans, we got the travel vans.</div>
                <div>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
                <Link to="/vans">Find your van</Link>
            </div>
        </div>
    )
}