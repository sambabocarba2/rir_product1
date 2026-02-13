import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton Hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2>Principal</h2>

        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/hotels" onClick={() => setOpen(false)}>
              Liste des hotels
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
