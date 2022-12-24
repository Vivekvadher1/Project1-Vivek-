import {BrowserRouter, Routes, 
Route  } from "react-router-dom";

import BoxSx from "./components/box";          //importing the components
import Box2 from "./components/box2";
import Home from "./components/home"
// import Axios from "./components/axios";
import Login from "./components/login";
import Page from "./components/page";
import Not from "./components/notfound";
function App() {

  return (
    <>
     <BrowserRouter>                                      {/*wrapping the whole content in BrowserRouter */}
      
      <Routes>                        {/*defining the route and displays the first child route that matches the URL*/}

          <Route  path="/" element={<Home/>} />            {/*defining the path/route for the specific component */}
          <Route  path="/sx" element={<BoxSx/>} />
          <Route  path="/box" element={<Box2/>} />
          <Route  path="/page" element={<Page/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="*" element={<Not/>} />         {/*if some path doesn't matches */}
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
