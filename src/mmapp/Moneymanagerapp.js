import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import { GlobalProvider } from '../context/GlobalState';


import './mmApp.css';

function Moneymanagerapp() {
  return (
  
        
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    
 

  );
}

export default Moneymanagerapp;