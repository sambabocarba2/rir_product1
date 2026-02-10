function StatCard({ title, value, color, icon }) {
  return (
    <div
      className="stat-card"
      style={{
        background: "#f1ecec",
        borderRadius: "16px",
        padding: "20px",
        minWidth: "200px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow =
          "0 15px 35px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 6px 15px rgba(0,0,0,0.15)";
      }}
    >
      <div
        style={{
          fontSize: "35px",
          color,
          background: `${color}22`,
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        {icon}
      </div>

      <div>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <p style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
