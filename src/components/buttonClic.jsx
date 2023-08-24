import React from "react";
import '../stylesheet/buttonClic.css';

function button({text, isButtonClic, handleClick}){
  return(
    <button className={isButtonClic ? "button-clic" : "button-reload"} onClick={handleClick}>
      {text}
    </button>
  );
}
export default button;