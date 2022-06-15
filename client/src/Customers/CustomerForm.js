import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const CustomerForm = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    if(id){
    getCustomer()
    }
  }, [])

  const getCustomer = async () => {
    try {
      let res = await axios.get(`/api/customers/${id}`)
      setName(res.data.name)
      setAddress(res.data.address)
    } catch(err) {
      alert('Error has occured with get books')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(id){
      await axios.put(`/api/customers/${id}`)
    }
    else{
      await axios.post('/api/customers')
    }
    navigate('/customers')
  }

  return (
    <div>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Enter Name:</p>
        <input value={name} onChange={(e=> setName(e.target.value))} />
        <p>Enter Address:</p>
        <input value={address} onChange={(e=> setAddress(e.target.value))} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CustomerForm