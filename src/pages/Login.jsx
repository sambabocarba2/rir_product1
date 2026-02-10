import "./Login.css";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [remember, setRemember] = useState(true);
  const [mode, setMode] = useState("login"); // login | register | forgot

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    if (remember) {
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Inscription réussie ✅ (simulation)");
    setMode("login");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    alert("Email de récupération envoyé 📧 (simulation)");
    setMode("login");
  };

  return (
    <div className="login-container">
      <h1>RIR PRODUCT</h1>

      {/* ===== TITRE DYNAMIQUE ===== */}
      <p>
        {mode === "login" && "Connexion Administrateur"}
        {mode === "register" && "Créer un compte"}
        {mode === "forgot" && "Mot de passe oublié"}
      </p>

      {/* ===== FORMULAIRE ===== */}
      <form
        className="login-form"
        onSubmit={
          mode === "login"
            ? handleLogin
            : mode === "register"
            ? handleRegister
            : handleForgot
        }
      >
        {mode === "register" && (
          <input type="text" placeholder="Nom complet" required />
        )}

       {(mode === "login" || mode === "register" || mode === "forgot") && (
  <input
    type="email"
    placeholder="Email"
    required={mode !== "login"}
  />
)}

{(mode === "login" || mode === "register") && (
  <input
    type="password"
    placeholder="Mot de passe"
    required={mode === "register"}
  />
)}

        {mode === "login" && (
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Garder moi connecté
          </label>
        )}

        <button type="submit">
          {mode === "login" && "Se connecter"}
          {mode === "register" && "S'inscrire"}
          {mode === "forgot" && "Réinitialiser"}
        </button>

        {/* ===== LIENS ===== */}
        {mode === "login" && (
          <>
            <p className="link yellow" onClick={() => setMode("forgot")}>
              Mot de passe oublié ?
            </p>

            <p className="link">
              Vous n'avez pas de compte ?{" "}
              <span className="red" onClick={() => setMode("register")}>
                S'inscrire
              </span>
            </p>
          </>
        )}

        {(mode === "register" || mode === "forgot") && (
          <p className="link" onClick={() => setMode("login")}>
            ← Retour à la connexion
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
