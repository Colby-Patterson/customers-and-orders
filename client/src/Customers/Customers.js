import { useContext, useEffect, useState } from "react"
// import axios from 'axios'
import Customer from "./Customer"
import { DataContext } from "../providers/DataProvider"

const Customers = () => {
  const {customers, customerOrders, addCustomer, deleteCustomer, updateCustomer, getCustomerOrders} = useContext(DataContext)
  // const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(()=>{
  //   getCustomers()
  // }, [])

  // const getCustomers = async () => {
  //   try {
  //     let res = await axios.get('/api/customers')
  //     setCustomers(res.data)
  //     setLoading(false)
  //   } catch(err){
  //     setLoading(false)
  //     console.log(err)
  //     alert('Error has occured in get customers')
  //   }
  // }

  const renderCustomers = () => {
    return customers.map(c=> <Customer key={c.id} {...c} />)
  }

  return (
    <div>
      List of customers
      {renderCustomers()}
      <h1>Test Buttons For Customers</h1>
      <button onClick={()=> addCustomer({name: 'New Customer', address: '1234 New Road'})}>Add Test Customer</button>
      <br />
      <button onClick={()=> deleteCustomer(customers[0].id)}>Delete a customer</button>
      <br />
      <button onClick={()=> updateCustomer({id: customers[0].id, name: 'Updated customer', age: 41})}>Update a customer</button>
      <br />
      <h1>Test Buttons for Customer Orders</h1>
      <button onClick={()=> getCustomerOrders(customers[0].id)}>Show First Customer's Orders</button>
      <p>{JSON.stringify(customerOrders)}</p>
    </div>
  )
}

export default Customers