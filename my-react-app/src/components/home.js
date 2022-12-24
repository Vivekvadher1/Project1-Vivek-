import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/sx">BoxSx</Link>
                </li>
                <li>
                    {/* Endpoint to route to box component */}
                    <Link to="/box">Box2</Link>
                </li>
                <li>
                    {/* Endpoint to route page component */}
                    <Link to="/page">Page</Link>
                </li>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;