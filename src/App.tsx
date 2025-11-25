import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to="/EduGuide" replace />} />
          <Route path="/EduGuide" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}
