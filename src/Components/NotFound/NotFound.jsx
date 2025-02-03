import React from "react";
import "./notFound.scss"; // Importez le fichier SCSS pour le style

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! La page que vous recherchez n'existe pas.</p>
      <a href="/">Retour à l'accueil</a>
    </div>
  );
};

export default NotFound;