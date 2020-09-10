import React from 'react';

import Homepage from "./index.js"
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
function mainp() {
  
  
    
    return (
      <div className="App">
        <header className="TodoApp">
        
        <h1>WELCOME TO MONEY MANAGER</h1>
           </header>
      
      <div>
      <nav>
          
                   <center><button><Link to="/viewchange">Login</Link></button></center>
                   <br></br>
                     
                   
                  
                     <center><button><Link to="/registerview">Register</Link></button></center>
                  
                 
                 </nav>
     
      </div>
      </div>
    );
  }
  
  export default mainp;