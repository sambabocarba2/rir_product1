function HotelCard({ name, address, price, images }) {
  return (
    <div
      className="hotel-card"
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fffdfd",
        boxShadow: "0 6px 15px rgba(17, 17, 17, 0.15)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.03)";

        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
      }}
    >
      <img
        src={images}
        alt={name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "12px" }}>
        <h3>{name}</h3>
        <p>{address}</p>
        <strong>{price} FCFA / nuit</strong>
      </div>
    </div>
  );
}

export default HotelCard;
