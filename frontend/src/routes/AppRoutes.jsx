import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/public/Landing";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import Attendance from "../pages/student/Attendance";
import Dashboard from "../pages/student/dashboard";
import Events from "../pages/student/Events";
import MyQR from "../pages/student/MyQR";
import Profile from "../pages/student/Profile";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/myqr" element={<MyQR/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;