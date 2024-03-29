import { Link, Outlet } from "react-router-dom"

const PageWrapper = () => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/customers'>Customers</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default PageWrapper