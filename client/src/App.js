import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './PageWrapper';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
