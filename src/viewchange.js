import React, { useState } from "react";


import App from "./App.js";

import Moneymanagerapp from "./mmapp/Moneymanagerapp.js";

function Viewchange() {
  const [state, setstate] = useState("App");
  
  

  return (
    <div>
      
        {state === "App" ?  <App  setstate={setstate} />:null }
        {state === "Moneymanagerapp" ?  <Moneymanagerapp setstate={setstate} />:null }
      
       
       
         
    </div>
  );
}

export default Viewchange;