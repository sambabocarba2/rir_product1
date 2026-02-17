import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
  <Router>
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  </Router>
);

}

export default App;
