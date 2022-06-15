import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [customers, setCustomers] = useState([])

  useEffect(()=>{
    getCustomers()
  }, [])

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
      console.log(res)
      setCustomers(res.data)
    } catch(err){
      console.log(err)
      alert('Error has occured in get customers')
    }
  }

  const addCustomer = async (customer) => {
    try{
      let res = await axios.post('/api/customers', customer)
      setCustomers([res.data, ...customers])
    } catch(err) {
      alert('Error occured in addCustomer')
    }
  }

  return (
    <DataContext.Provider value={{customers, getCustomers, addCustomer}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider