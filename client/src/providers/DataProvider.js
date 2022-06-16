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

  const getCustomerOrders = async (customer_id) => {
    try {
      let res = await axios.get(`/api/customers/${customer_id}/orders`)
      console.log(res.data)
      setCustomerOrders(res.data)
    } catch(err) {
      alert('Error occurred in getCustomerOrders')
    }
  }

  const addCustomerOrder = async (customer_id, order) => {
    try {
      let res = await axios.post(`/api/customers/${customer_id}/orders`, order)
      let newOrders = customerOrders.map(o=> o.id)
    } catch(err) {
      alert('Error occurred in addCustomerOrder')
    }
  }

  const updateCustomerOrder = async (customer_id, order) => {
    try {
      let res = await axios.put(`/api/customers/${customer_id}/orders/${order.id}`, order)
      let newOrders = customerOrders.map(o=> o.id === res.data.id ? res.data : o)
      setCustomerOrders(newOrders)
    } catch(err) {
      alert('Error occurred in updateCustomerOder')
    }
  }

  const deleteCustomerOrder = async (customer_id, order_id) => {
    try {
      let res = await axios.delete(`/api/customers/${customer_id}/orders/${order_id}`)
      let newOrders = customerOrders.filter(o=> o.id !== order_id)
      setCustomerOrders(newOrders)
    } catch(err) {
      alert('Error occurred in deleteCustomerOrder')
    }
  }

  return (
    <DataContext.Provider value={{customers, customerOrders,  getCustomers, addCustomer, deleteCustomer, updateCustomer, getCustomerOrders, addCustomerOrder, updateCustomerOrder}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider