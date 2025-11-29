import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";


import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardAbout from "./Pages/Dashboard/DashboardAbout";
import DashboardServices from "./Pages/Dashboard/DashboardServices";
import DashboardContact from "./Pages/Dashboard/DashboardContact";


import Strand from "./Pages/Education/Strand/Strand"
import ICT from "./Pages/Education/Strand/ICT"
import STEM from "./Pages/Education/Strand/STEM"
import ABM from "./Pages/Education/Strand/ABM"
import GAS from "./Pages/Education/Strand/GAS"


import Course from "./Pages/Education/Course/Course";
import Technologies from "./Pages/Education/Course/Technologies";
import Business from "./Pages/Education/Course/Business";
import Engineering from "./Pages/Education/Course/Engineering";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/EduGuide" element={<Landing />} />


          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/About" element={<DashboardAbout />} />
          <Route path="/Dashboard/Services" element={<DashboardServices />} />
          <Route path="/Dashboard/Contact" element={<DashboardContact />} />

          <Route path="/Strand" element={<Strand />} />
          <Route path="/ICT" element={<ICT />} />
          <Route path="/STEM" element={<STEM />} />
          <Route path="/ABM" element={<ABM />} />
          <Route path="/GAS" element={<GAS />} />

          <Route path="/Course" element={<Course />} />
          <Route path="/Technologies" element={<Technologies />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Engineering" element={<Engineering />} />


          <Route path="/*" element={<Navigate to="/EduGuide" replace />} />
        </Routes>
      </Router>

    </div>
  );
}
