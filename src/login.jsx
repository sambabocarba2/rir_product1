import { useState } from "react";
import "./Login.css";

function Login() {
  // États pour stocker les données du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction exécutée quand on clique sur "Se connecter"
  const handleSubmit = (event) => {
    event.preventDefault(); // empêche le rechargement de la page

    console.log("Email :", email);
    console.log("Mot de passe :", password);

    // Plus tard :
    // envoyer les données vers une API (Laravel / Node / etc.)
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">RED PRODUCT</h2>
        <p className="subtitle">Connexion Administrateur</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Gardez-moi connecté
            </label>
          </div>

          <button type="submit">Se connecter</button>
        </form>

        <div className="links">
          <a href="#">Mot de passe oublié ?</a>
          <p>
            Pas encore de compte ? <a href="#">S’inscrire</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
