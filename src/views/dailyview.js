import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import { render } from '@testing-library/react';



function Dailyview() {
  
function check(){
  try{
    debugger;
    var rusers = fetch("https://money-manager21.herokuapp.com/transactions")
    rusers
      .then(function(data)  {
        return data.json()
      })
      .then(function(Users) {
     
    
    
        var inputdate = document.getElementById("dateselector").value

      
        
        for(var i=0;i<Users.length;i++)
        {
          console.log(Users.length);
          
      if(inputdate==Users[i].date)
      {
        var record= "Text: " + Users[i].text + "   Date:" + Users[i].date + "   Amount:" + Users[i].amount;
        //alert(record)
        var a =document.createElement("label")
        var nxline =document.createElement("br")
        a.innerHTML=record
        
        document.getElementById("ddiv").appendChild(a)
        a.appendChild(nxline)
      }
      else{
        if(i==Users.length-1 )
        {
        
        alert("no more records")
        }
       
      }
      
        }
      })
    }
    catch(error)
                {
                    console.log(error)
                }
}


  return (
  
    <div id="ddiv" className="App">
      <header className="App-header">
       
      <h1>Daily view</h1>
         </header>
         <label>select date to search</label>
         <input id ="dateselector" type="date"></input>
<button onClick={()=>(check())}>Search</button>  
<ul>
<li><Link to="/appview">Back to app page</Link></li>  
</ul>
  <br></br>
    
    </div>

  
  );
 }



export default Dailyview;
