import React,{useState} from 'react'
import Loading from './loading.js'
import './fpwd.css';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";

function Forgotpwd() {
  const[loading,setLoading] = useState(false)
 

function generate () {
  

  function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0)
     {
index = Math.floor(Math.random() * ctr);
ctr--;
temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    var final = arra1.slice(0,8);

    return final;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var final2=shuffle(myArray);
var final3=final2.join("")
document.getElementById('output').innerHTML= final3;



}
function check ()
{
 
 var e2=document.getElementById('output').innerHTML;
var e1 = document.getElementById('ec').value;

console.log(e2)
if(e1==e2)
{
  var button1 = document.getElementById('b1')
    button1.disabled = false;

    alert("now you can reset your password")
}
else{
    alert("invalid captcha, Pls try again")
}
}
const Reg2 = () =>
  {
    setLoading(true);
    function postRequest(url, data) {
      return fetch(url, {
        credentials: 'same-origin', 
        method: 'POST', 
        body: JSON.stringify(data), 
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
    alert("pwd changed, now you can go back to home and login")
    
   
  }
  else{
    setLoading(false);
    alert("pwds donot match")
   
  }

}  
           
  
    
    return (
      
      <div className="App">
        <header className="TodoApp">
        
        <h1>RESET PASSWORD</h1>
           </header>
      
           <div>
        <label id ="output" className="captcha"></label>
       <br></br>
        <input type="button" value="Generate captcha" onClick={generate}></input>
        
        <input type ="text" id="ec"></input>
       
        <input type="button" value="Check" onClick={check}></input>
        <br></br>
    </div>
    <form id="product-form3">
        <label for="">User name</label>
        <input type ="text" id="name"></input>
        <br></br>
        <label for="">password</label>
        <input type="password" id="pwd"></input>
        <br></br>
        <label for="">re enter password</label>
        <input type="password" id="pwd2"></input>
        <br></br>
        <input type="button" value="RESET" id="b1" onClick={()=>(Reg2())} disabled ></input>
        {loading === true ? <Loading /> :null}
        </form>
        <ul>
<li className="backbutton" ><Link to="/mainview">Back to home page</Link></li>  
</ul>
      </div>
    );
  }
  
  export default Forgotpwd;
