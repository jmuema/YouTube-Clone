import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage"

function App() {
  return (
    <div className="app">
      {/* <h1> YouTube Clone</h1> */}
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              <SearchPage/>

             
            </div>          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
               {/* Recommended Videos */}
               <RecommendedVideos />
            
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
