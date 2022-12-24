import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <br />
            
            <ul>
            
                <li>
                    {/* Endpoint to route to BoxSx component */}
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    {/* Endpoint to route to Box2 component */}
                    <Link to="/page">Page</Link>
                </li>
                <li>
                    {/* Endpoint to route Page component */}
                    <Link to="/box">Box2</Link>
                </li>
                <li>
                    {/* Endpoint to route to Login component */}
                    <Link to="/sx">BoxSx</Link>
                </li>
                
            </ul>
            
        </>
    );
};


export default Home;