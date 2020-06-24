import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from "./Scroll";

function App() {
  let [robofriends, updateRobots] = useState({
    robots: [],
    searchField: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        updateRobots((prevItems) => {
          return {
            robots: users,
            searchField: prevItems.searchField,
          };
        });
      });
  }, []);

  function changeList(e) {
    let val = e.target.value;
    updateRobots((prevItems) => {
      return {
        robots: prevItems.robots,
        searchField: val,
      };
    });
  }

  let finalRobots = robofriends.robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(robofriends.searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox onChange={changeList} />
      <Scroll>
        <CardList robots={finalRobots} />
      </Scroll>
    </div>
  );
}

export default App;
