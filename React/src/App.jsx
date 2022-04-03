import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UsersMySql from './UsersMySql';
import Members from './Members';
import EditUser from './EditUser';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="Link-div">
                    <Link to="/reglogin">Register or Login</Link>
                </div>
                <Routes>
                    <Route path="/reglogin" element={<UsersMySql />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/edituser/:id" element={<EditUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
