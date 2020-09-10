import React from 'react'
import './header.css'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
export const Header = () => {
  return (
    <div>
    <h2>
      Money Manager
      </h2>
      <ul>
  <li><Link to="/dailyview">Daily view</Link></li>
  <li><Link to="/monthlyview">Monthly view</Link></li>
  <li><Link to="/yearlyview">Year view</Link></li>
  <li className="logout"><Link to="/mainview">Logout</Link></li>

  

  
</ul>
      </div>
      
  )
}
