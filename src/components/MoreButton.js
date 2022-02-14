import React from "react";

function MoreButton({onClickMore}) {
  return <button style={{backgroundColor: "red"}} onClick={onClickMore}>More cards!</button>;
}

export default MoreButton;