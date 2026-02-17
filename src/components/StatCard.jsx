function StatCard({ title, value, color, icon }) {
  return (
    <div
      className="stat-card"
      style={{
        background: "#f1ecec",
        borderRadius: "16px",
        padding: "16px",
        minWidth: "0", // 🔥 IMPORTANT
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {/* ICON */}
      <div
        style={{
          fontSize: "32px",
          color,
          background: `${color}22`,
          padding: "12px",
          borderRadius: "12px",
          flexShrink: 0, // 🔥 empêche l’écrasement
        }}
      >
        {icon}
      </div>

      {/* TEXTE */}
      <div
        style={{
          minWidth: 0, // 🔥 ESSENTIEL
          overflow: "hidden",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontSize: "14px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h4>

        <p
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
