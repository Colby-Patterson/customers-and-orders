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
      alert('Error has occurred in get customers')
    }
  }

  const addCustomer = async (customer) => {
    try{
      let res = await axios.post('/api/customers', customer)
      setCustomers([res.data, ...customers])
    } catch(err) {
      alert('Error occurred in addCustomer')
    }
  }

  const deleteCustomer = async (id) => {
    try {
      let res = await axios.delete(`/api/customers/${id}`)
      let newCustomers = customers.filter(c=> c.id !== id)
      setCustomers(newCustomers)
    } catch (err) {
      alert('Error occurred in deleteCustomer')
    }
  }

  return (
    <DataContext.Provider value={{customers, getCustomers, addCustomer, deleteCustomer}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider