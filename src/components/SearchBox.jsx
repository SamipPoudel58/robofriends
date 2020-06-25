import React from "react";

function SearchBox(props) {
  return (
    <div className="pa2">
      <input
        onChange={props.onChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
}

export default SearchBox;
