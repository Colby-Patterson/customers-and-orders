import { useEffect, useState } from "react"
import axios from 'axios'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getCustomers()
  }, [])

  const getCustomers = async () => {
    try {
      let res = axios.get('/api/customers')
      setCustomers((await res).data)
      setLoading(false)
    } catch(err){
      setLoading(false)
      console.log(err)
      alert('Error has occured in get customers')
    }
  }

  return (
    <div>

    </div>
  )
}

export default Customers