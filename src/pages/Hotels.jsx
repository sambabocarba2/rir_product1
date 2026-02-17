import { useState } from "react";
import HotelCard from "../components/HotelCard";

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";

const hotelsData = [
  {
    name: "Hôtel Terrou-Bi",
    address: "Dakar",
    email: "contact@terroubi.sn",
    phone: "771234567",
    price: 25000,
    images: hotel1,
  },
  {
    name: "Hôtel Pullman",
    address: "Plateau",
    email: "contact@pullman.sn",
    phone: "781234567",
    price: 20000,
    images: hotel2,
  },
  {
    name: "Hôtel King Fahd",
    address: "Almadies",
    email: "contact@kingfahd.sn",
    phone: "761234567",
    price: 30000,
    images: hotel3,
  },
  {
    name: "Hôtel Radisson",
    address: "Dakar",
    email: "contact@radisson.sn",
    phone: "701234567",
    price: 22000,
    images: hotel4,
  },
];

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      name: e.target.name.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      price: Number(e.target.price.value),
      currency: e.target.currency.value,
      images: e.target.image.files[0]
        ? URL.createObjectURL(e.target.image.files[0])
        : hotel1,
    };

    setHotels([newHotel, ...hotels]);
    setShowForm(false);
    e.target.reset();
  };

  const inputStyle = {
    height: "60px",
    padding: "14px 16px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  return (
    <div className="hotels-page">
     {/* 🔍 RECHERCHE + 🔔 NOTIFICATION */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    gap: "12px",
  }}
>
  {/* 🔍 Recherche */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "8px 12px",
      flex: 1,
      maxWidth: "320px",
    }}
  >
    <span style={{ fontSize: "18px" }}>🔍</span>
    <input
      type="text"
      placeholder="Rechercher un hôtel..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "14px",
      }}
    />
  </div>

  {/* 🔔 Notification */}
  <button
    style={{
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      width: "42px",
      height: "42px",
      fontSize: "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    title="Notifications"
  >
    
    🔔
  </button>
</div>


      {/* TITRE À GAUCHE / BOUTON À DROITE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Liste des hôtels</h1>

        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Créer un nouvel hôtel
        </button>
      </div>

      {/* LISTE DES HÔTELS */}
      <div className="hotel-list">
        {hotels
          .filter(
            (hotel) =>
              hotel.name.toLowerCase().includes(search.toLowerCase()) ||
              hotel.address.toLowerCase().includes(search.toLowerCase())
          )
          .map((hotel, index) => (
            <HotelCard
              key={index}
              name={hotel.name}
              address={hotel.address}
              price={hotel.price}
              images={hotel.images}
            />
          ))}
      </div>

      {/* MODAL */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="modal-form"
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  fontSize: "22px",
                  background: "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                ←
              </button>
              <h2 style={{ margin: 0 }}>CRÉER UN NOUVEAU HÔTEL</h2>
            </div>

            <div className="modal-grid">
              <input name="name" placeholder="Nom de l'hôtel" required style={inputStyle} />
              <input name="address" placeholder="Adresse" required style={inputStyle} />
              <input type="email" name="email" placeholder="E-mail" required style={inputStyle} />
              <input type="tel" name="phone" placeholder="Téléphone" required style={inputStyle} />
              <input type="number" name="price" placeholder="Prix par nuit" required style={inputStyle} />
              <select name="currency" required style={inputStyle}>
                <option value="XOF">XOF</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <label
              style={{
                marginTop: "25px",
                height: "130px",
                border: "2px dashed #aaa",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              📷 Ajouter une photo
              <input type="file" name="image" accept="image/*" hidden />
            </label>

            <div style={{ textAlign: "right", marginTop: "30px" }}>
              <button
                type="submit"
                style={{
                  padding: "14px 30px",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Hotels;
