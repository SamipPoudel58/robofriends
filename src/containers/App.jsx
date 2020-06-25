import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";

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

  const { robots, searchField } = robofriends;
  let finalRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading</h1>;
  } else {
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
}

export default App;
