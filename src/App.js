import "./App.css";
import Display from "./Components/Display/index";
import Search from "./Components/Search/index";
import RandomButton from "./Components/RandomButton";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function handleClick(input) {
    setSearch(input);
    console.log("searched", input);
  }
  return (
    <div className="App">
      <Display search={search}></Display>
      <nav>
        <Search handleClick={handleClick}></Search>
        <RandomButton handleClick={handleClick} search={search}></RandomButton>
      </nav>
    </div>
  );
}

export default App;
