import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";


function App() {
  const pages = [
    { readableName: "Signup", url: "items" },
  ]


  const [currentPage, setCurrentPage] = useState(0)

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
    window.localStorage.setItem("currentPage", JSON.stringify(newPageNum))
  }

  let content = [<Signup />]


  // did mount
  useEffect(() => {
    let lSpage = window.localStorage.getItem("currentPage")
    if (lSpage !== currentPage) {
      setCurrentPage(JSON.parse(lSpage))
    }
  }, [currentPage])

  // useEffect(()=> window.localStorage.setItem("currentPage", JSON.stringify(currentPage)))

  function api(){
    
  }  


  return (
    <div className="brand-main">
      <NavBar
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      />

    <div className="container my-5">
    {content[currentPage]}
    </div>

    </div>
  );
}

export default App;
