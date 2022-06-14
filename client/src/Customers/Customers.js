import { useEffect, useState } from "react"
import axios from 'axios'
import Customer from "./Customer"

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getCustomers()
  }, [])

  const getCustomers = async () => {
    try {
      let res = await axios.get('/api/customers')
      // console.log(res)
      setCustomers(res.data)
      // console.log(customers)
      setLoading(false)
    } catch(err){
      setLoading(false)
      console.log(err)
      alert('Error has occured in get customers')
    }
  }

  const renderCustomers = () => {
    return customers.map(c=> <Customer key={c.id} {...c} />)
  }

  return (
    <div>
      List of customers
      {renderCustomers()}
    </div>
  )
}

export default Customers