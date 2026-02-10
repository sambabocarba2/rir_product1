import { useState } from "react";
import HotelCard from "../components/HotelCard";

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";


const hotelsData = [
  { name: "Hôtel Terrou-Bi", address: "Dakar", price: 25000, images: hotel1 },
  { name: "Hôtel Pullman", address: "Plateau", price: 20000, images: hotel2 },
  { name: "Hôtel King Fahd", address: "Almadies", price: 30000, images: hotel3 },
  { name: "Hôtel Radisson", address: "Dakar", price: 22000, images: hotel4 },
  
  
];

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData);
  const [showForm, setShowForm] = useState(false);

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
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <div
  style={{
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <h1 style={{ margin: 0 }}>Liste des hôtels</h1>

  <button
    onClick={() => setShowForm(true)}
    style={{
      marginLeft: "auto",   // 👈 C’EST ÇA LA CLÉ
      padding: "10px 20px",
      background: "#0a0a0a",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Créer un nouvel hôtel
  </button>
</div>

      {/* Liste des hôtels */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            address={hotel.address}
            price={hotel.price}
            images={hotel.images}
          />
        ))}
      </div>

      {/* Formulaire modal */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(8, 8, 8, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowForm(false)} // fermer si on clique en dehors
        >
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              backgroundColor: "hsla(0, 4%, 5%, 0.96)",
              width: "400px",
            }}
            onClick={(e) => e.stopPropagation()} // éviter de fermer le formulaire en cliquant dessus
          >
            <h2>Ajouter un hôtel</h2>
            <input type="text" name="name" placeholder="Nom de l'hôtel" required />
            <input type="text" name="address" placeholder="Adresse" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Numéro de téléphone" required />
            <input type="number" name="price" placeholder="Prix par nuit" required />
            <input type="text" name="currency" placeholder="Devise (ex: XOF, €)" required />
            <input type="file" name="image" accept="image/*" />
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                background: "linear-gradient(135deg, #cddf2d, #ee09db)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 6px 15px rgba(32, 12, 216, 0.4)",
                transition: "all 0.3s ease",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(248, 7, 7, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(11, 240, 99, 0.4)";
              }}
            >
              Enregistrer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Hotels;