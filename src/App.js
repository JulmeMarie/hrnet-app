import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeFormPage from './pages/EmployeeFormPage';
import EmployeeListPage from './pages/EmployeeListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeFormPage />} />
        <Route path='/employee-list' element={<EmployeeListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
