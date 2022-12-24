import {BrowserRouter, Router, Routes, 
Route ,Navigate } from "react-router-dom";

import BoxSx from "./components/box";
import Box2 from "./components/box2";
import Home from "./components/home"
// import Axios from "./components/axios";
import Login from "./components/login";
import Page from "./components/page";
function App() {

  return (
    <>
    <BrowserRouter>
      
      <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/sx" element={<BoxSx/>} />
          <Route  path="/box" element={<Box2/>} />
          <Route  path="/page" element={<Page/>} />
          <Route path="/login" element={<Login/>} />
          
          {/* <Redirect to="/" /> */}
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    
    </BrowserRouter>
    {/*<BoxSx /> */} 
    {/*<Box2 />*/}
    {/* <Axios /> */}
    {/* <Login /> */}
    {/* <Page /> */}
    </>
  );
}

export default App;
