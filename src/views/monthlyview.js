import React from 'react';

import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";



function Monthlyview() {
  
  function check(){
    try{
      
      var rusers = fetch("https://money-manager21.herokuapp.com/transactions")
      rusers
        .then(function(data)  {
          return data.json()
        })
        .then(function(Users) {
       
      
      
          var inputdate = document.getElementById("dateselector").value
                  
          //2020-08

          for(var i=0;i<Users.length;i++)
          {
            console.log(Users.length);

            var usrDateIndex=Users[i].date.lastIndexOf("-");
            var userMonthDate=Users[i].date.slice(0,usrDateIndex);

        if(inputdate==userMonthDate)
        {
          var record= "Text: " + Users[i].text + " Date:" + Users[i].date + " Amount:" + Users[i].amount;
          var a =document.createElement("label")
          var nxline =document.createElement("br")
        a.innerHTML=record
        
        document.getElementById("mdiv").appendChild(a)
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
  
    <div className="App">
      <header className="App-header">
       
      <h1>Monthly view</h1>
         </header>
    
    <div id ="mdiv">
    <label>select date to search</label>
         <input id ="dateselector" type="month"></input>
<button onClick={()=>(check())}>Search</button>   
<ul>
<li><Link to="/appview">Back to app page</Link></li>  
</ul>  
<br></br>
   
    
    </div>
    </div>

  
  );
}

export default Monthlyview;
