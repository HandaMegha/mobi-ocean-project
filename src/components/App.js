import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/devices" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
