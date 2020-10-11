import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="app">
      {/* <h1> YouTube Clone</h1> */}


      {/*  Header */}
      <Header/>
      <div className="app__page" >

      {/* Sidebar */}
      <Sidebar/>

{/* Recommended Videos */}

      </div>


    </div>
  );
}

export default App;
