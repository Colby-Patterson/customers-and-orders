import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './PageWrapper';
import Home from './Home';
import CustomerPageWrapper from './Customers/CustomerPageWrapper';
import Customers from './Customers/Customers';
import CustomerShow from './Customers/CustomerShow';
import CustomerForm from './Customers/CustomerForm';

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path='/customers' element={<CustomerPageWrapper />}>
          <Route index element={<Customers />} />
          <Route path='/customers/:id' element={<CustomerShow />} />
          <Route path='/customers/new' element={<CustomerForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
