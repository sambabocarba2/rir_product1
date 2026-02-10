import { Link } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  return (
    <div
      style={{
        width: "200px",
        background: "#0a0a0a",
        padding: "20px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: open ? "0" : "-200px",
        transition: "left 0.3s ease",
      }}
    >
      <h2 style={{ color: "white" }}>Principal</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/" style={{ color: "white" }} onClick={() => setOpen(false)}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/hotels"
            style={{ color: "white" }}
            onClick={() => setOpen(false)}
          >
            Liste des hôtels
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
