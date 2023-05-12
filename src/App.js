import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path='/view-employee/:id' element={<ViewEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent />} ></Route>
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
