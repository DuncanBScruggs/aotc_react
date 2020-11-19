import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import axiosHelper from "./Utilities/axiosHelper";
import { BrowserRouter as Router, Link, Switch, Route, } from 'react-router-dom';


function App() {
  const pages = [
    { readableName: "Signup", url: "signup" },
    { readableName: "Login", url: "login" },
  ]


  const [currentPage, setCurrentPage] = useState(0);

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
    window.localStorage.setItem("currentPage", JSON.stringify(newPageNum))
  }

  // did mount
  useEffect(() => {
    let lSpage = window.localStorage.getItem("currentPage")
    if (lSpage !== currentPage) {
      setCurrentPage(JSON.parse(lSpage))
    }
  }, [currentPage])

  // useEffect(()=> window.localStorage.setItem("currentPage", JSON.stringify(currentPage)))



  return (
    <div className="brand-main">
      <Router>

        <NavBar
          pages={pages}
          currentPage={currentPage}
          setPage={setPage}
        />

        <div class="row justify-content-center">
          <div class="col-7">
            <Switch>
              <Route path="/board">
                <h1>THANKS!</h1>
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
