import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing";

import Strand from "./Pages/Education/Strand/Strand"
import ICT from "./Pages/Education/Strand/ICT"
import STEM from "./Pages/Education/Strand/STEM"
import ABM from "./Pages/Education/Strand/ABM"
import GAS from "./Pages/Education/Strand/GAS"


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/EduGuide" element={<Landing />} />


          <Route path="/Strand" element={<Strand />} />
          <Route path="/ICT" element={<ICT />} />
          <Route path="/STEM" element={<STEM />} />
          <Route path="/ABM" element={<ABM />} />
          <Route path="/GAS" element={<GAS />} />



          <Route path="/*" element={<Navigate to="/EduGuide" replace />} />
        </Routes>
      </Router>

    </div>
  );
}
