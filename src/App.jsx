import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  // 🔐 Si pas connecté → Login seulement
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  // ✅ Si connecté → App normale
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar open={open} setOpen={setOpen} />

        <div
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: "200px",
          }}
        >
          <button
  onClick={() => setOpen(!open)}
  style={{
    fontSize: "26px",
    background: "none",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
    color: "black", // 👈 AJOUTE CETTE LIGNE
  }}
>
  ☰
</button>


          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
