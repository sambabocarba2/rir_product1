import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Veuillez remplir tous les champs");

    setIsLoggedIn(true);
    if (remember) localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <div className="login-container">
      <h1>RED PRODUCT</h1>
      <p>Connexion Administrateur</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Garder moi connecté
        </label>

        <button type="submit">Se connecter</button>
        <a href="#" style={{ color: "yellow", textDecoration: "none"}}>
            Mot de passe oublier ?
        </a>
        <span>
            Vous n'avez pas de compte ? <a href="#" style={{ color: "red"}}>S'inscrire</a>
        </span>
      </form>
    </div>
  );
}

export default Login;