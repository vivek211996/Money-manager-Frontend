import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'; 

// Initial state
const initialState = {
  transactions:[],
  error:null,
  loading:true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
async function getTransactions(){
  try{
    const res = await axios.get("https://money-manager21.herokuapp.com/transactions");
    dispatch({
      type:'GET_TRANSACTION',
      payload:res.data
     
    });
  }
  catch (err){
    console.log(err)
  }
}

  function deleteTransaction(id) {
   
   
      
      
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload:id
      });
    
    
  }

  async function addTransaction(transaction) {
    const config ={
      headers:{
        'Content-Type' :'application/json'
      }
    }
try {
  const res =await axios.post("https://money-manager21.herokuapp.com/adddata" , transaction,config)
   dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction
  });
} catch (error) {
  console.log(error)
  
}

   
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}