import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Customer from "./Customer"

const CustomerShow = () => {
  const [customer, setCustomer] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    getCustomer()
  }, [])

  const getCustomer = async () => {
    let res = await axios.get(`/api/customers/${id}`)
    setCustomer(res.data)
  }

  const renderCustomer = () => {
    return (
      <Customer {...customer} />
    )
  }

  return (
    <div>
      {renderCustomer()}
    </div>
  )
}

export default CustomerShow