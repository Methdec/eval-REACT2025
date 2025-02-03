import { useAuth } from "../../auth/AuthProvider";
import { Login, Logout } from "../../auth/LoginOut";
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"; // Importez le fichier SCSS

export default function Header() {
  const { user } = useAuth();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  return (
    <div className="header">
      <h1 className="header__title">{displayName}</h1>

      {user ? (
        <Logout />
      ) : (
        <Link to="/connect">
          <button className="bouton">Se connecter</button>
        </Link>
      )}
    </div>
  );
}
