import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos"


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
<RecommendedVideos />

      </div>


    </div>
  );
}

export default App;
