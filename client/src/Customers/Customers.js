import { useContext, useEffect, useState } from "react"
// import axios from 'axios'
import Customer from "./Customer"
import { DataContext } from "../providers/DataProvider"

const Customers = () => {
  const {customers, addCustomer, deleteCustomer} = useContext(DataContext)
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
      <h1>Test Buttons</h1>
      <button onClick={()=> addCustomer({name: 'New Customer', address: '1234 New Road'})}>Add Test Customer</button>
      <br />
      <button onClick={()=> deleteCustomer(customers[0].id)}>Delete a customer</button>
    </div>
  )
}

export default Customers