import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "5px solid #0ccac4",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
