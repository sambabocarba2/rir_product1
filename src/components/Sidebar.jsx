import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2 style={{ color: "white", padding: "20px" }}>Principal</h2>

        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/hotels" onClick={() => setOpen(false)}>
              Liste des hôtels
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
