import "./Dashboard.css";
import StatCard from "../components/StatCard";

import {
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineDatabase
} from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Dashboard</h2>

        <div className="dashboard-actions">
          <input type="text" placeholder="Recherche" />
          <div className="avatar">👤</div>
        </div>
      </div>

      {/* BIENVENUE */}
      <div className="dashboard-welcome card">
        <h3>Bienvenue sur RED Product</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      {/* STATS AVEC ICÔNES */}
      <div className="dashboard-stats">
        <StatCard title="Formulaires" value="125" color="#3e1bbd" icon={<AiOutlineFile />} />
        <StatCard title="Messages" value="40" color="#dbeb07" icon={<AiOutlineMessage />} />
        <StatCard title="Utilisateurs" value="600" color="#ff9800" icon={<AiOutlineUser />} />
        <StatCard title="E-mails" value="25" color="#f44336" icon={<AiOutlineMail />} />
        <StatCard title="Hôtels" value="40" color="#f705ae" icon={<AiOutlineHome />} />
        <StatCard title="Entités" value="02" color="#0dd15e" icon={<AiOutlineDatabase />} />
      </div>

    </div>
  );
}
