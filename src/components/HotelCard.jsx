function HotelCard({ name, address, price, images }) {
  return (
    <div
      className="hotel-card"
      style={{
        width: "250px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fffdfd",
        boxShadow: "0 6px 15px rgba(17, 17, 17, 0.15)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 12px 30px #07070740";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(14, 13, 13, 0.15)";
      }}
    >
      <img
        src={images}
        alt={name}
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{name}</h3>
        <p>{address}</p>
        <strong>{price} FCFA / nuit</strong>
      </div>
    </div>
  );
}

export default HotelCard;
