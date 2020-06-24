import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid #0ccac4",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
