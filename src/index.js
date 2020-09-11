import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './register.jsx'
import Mainp from './Mainpage.jsx'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import Moneymanagerapp from'./mmapp/Moneymanagerapp.js'
import Forgotpwd from './forgotpwd.js'
import Dailyview from'./views/dailyview.js'
import Monthlyview from'./views/monthlyview.js'
import Yearlyview from'./views/yearlyview.js'
import './index.css'
import Viewchange from'./viewchange.js'
import { Redirect } from 'react-router';




const Homepage = () => {

    return (
     
      <Router>
        <div>
             
          <switch>
           
          <Route path ="/mainview">
          <Mainp/>
                   </Route>
              <Route path ="/registerview">
              <Register/>
                   </Route>
                   <Route path ="/viewchange">
                   <Viewchange/>
                   </Route>
                   <Route path ="/forgotview">
                   <Forgotpwd/>
                   </Route>
                   <Route path ="/appview">
                   <Moneymanagerapp/>
                   </Route>  
                  <Route path ="/dailyview">
                   <Dailyview/>
                  </Route>
                  <Route path ="/monthlyview">
                  <Monthlyview/>
                  </Route>
                 <Route path ="/yearlyview">
                  <Yearlyview/>
                  </Route>              
                   </switch>
          <br></br>
         
          <Redirect to="/mainview"/>

          </div>  
       
      </Router>
      
      
    
  )
}




ReactDOM.render(
  <React.StrictMode>
   
    <Homepage/>
  </React.StrictMode>,
  document.getElementById('root')
);


