import React from "react";
import '../stylesheet/counterClics.css';

function counter({numClics}){
  return(
   <div className="counter">
        {numClics}
   </div>
  );
}
export default counter;