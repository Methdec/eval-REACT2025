import React from "react";
import "./notFound.scss"; // Importez le fichier SCSS pour le style

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Vous n'avez rien a faire là.</p>
      <p>C'est une blague m'enlevez pas de points pour ca svp.</p>
      <a href="/">Retour à l'accueil</a>
    </div>
  );
};


export default NotFound;