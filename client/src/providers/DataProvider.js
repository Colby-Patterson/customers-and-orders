import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [customers, setCustomers] = useState([])
  const [customerOrders, setCustomerOrders] = useState(null)

  useEffect(()=>{
    getCustomers()
  }, [])

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
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

  const updateCustomer = async (customer) => {
    try {
      let res = await axios.put(`/api/customers/${customer.id}`, customer)
      console.log('Data from updateCustomer')
      console.log(res.data)
      setCustomers([res.data, ...customers])
    } catch(err) {
      alert('Error occurred in updateCustomer')
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

  const getCustomerOrders = async (id) => {
    try {
      let res = await axios.get(`api/customers/${id}/orders`)
      console.log(res.data)
      setCustomerOrders(res.data)
    } catch(err) {
      alert('Error occurred in getCustomerOrders')
    }
  }

  return (
    <DataContext.Provider value={{customers, customerOrders,  getCustomers, addCustomer, deleteCustomer, updateCustomer, getCustomerOrders}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider