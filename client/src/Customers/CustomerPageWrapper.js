import { Link, Outlet } from "react-router-dom"

const CustomerPageWrapper = () => {
  return (
    <div>
      <div>
        <Link to='/customers'>Show All Customers</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default CustomerPageWrapper