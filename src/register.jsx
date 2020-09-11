import React,{useState} from 'react'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import './register.css'
import Loading from './loading.js'

function Register() {
  const[loading,setLoading] = useState(false)
  const Reg = () =>
    {
      setLoading(true);
      function postRequest(url, data) {
        return fetch(url, {
          credentials: 'same-origin', // 'include', default: 'omit'
          method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
          body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        .then(response => response.json())
      }
  
      var a = document.getElementById("emailid").value
      var b = document.getElementById("pwd1").value
      var c = document.getElementById("pwd2").value  
      
     
      
     
    if(b==c)
    {
      postRequest('https://money-manager21.herokuapp.com/register', {"Username":''+ a, "pwd":''+b})
    .then(data => console.log(data)) // Result from the `response.json()` call
    .catch(error => console.error(error))
    setLoading(false);
      alert("registered, now you can login")
      
     
    }
    else{
      setLoading(false);
      alert("pwds donot match")
     
    }
  
  }  
    
    return (
      <div className="App">
<form >

<div class="container2">
  <label for="uname"><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname" id ="emailid" required></input>

  <label for="psw1"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw1" id ="pwd1" required></input>
  <label for="psw2"><b>Re Enter Password</b></label>
  <input type="password" placeholder="Re Enter Password" name="psw2" id ="pwd2" required></input>
      
  <button id = "signup" onClick={()=>(Reg())} >Register</button>
  {loading === true ? <Loading /> :null}
   
</div>

 

</form>

<ul>
<li><Link to="/mainview">Back to home page</Link></li>  
</ul>
</div>
    );
  }
  
  
  export default Register;
