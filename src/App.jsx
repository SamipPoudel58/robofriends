import React from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./robots";

function App() {
  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
