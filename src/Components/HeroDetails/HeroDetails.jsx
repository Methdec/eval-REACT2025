import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HeroDetails.scss"; // Importez le fichier SCSS

export default function HeroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      const response = await fetch(
        `https://corsproxy.io/https://superheroapi.com/api/11fa772601680b771ef736ed2c91f710/${id}`
      );
      const data = await response.json();

      if (data.response === "success") {
        setHero(data);
      }
    };

    fetchHeroDetails();
  }, [id]);

  if (!hero) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="hero-details">
      <img src={hero.image.url} alt={hero.name} />
      <h2>{hero.name}</h2>
      <p><span>Nom réel:</span> {hero.biography["full-name"]}</p>
      <p><span>Première apparition:</span> {hero.biography["first-appearance"]}</p>
      <p><span>Publisher:</span> {hero.biography.publisher}</p>
      <p><span>Alignement:</span> {hero.biography.alignment}</p>
      <p><span>Intelligence:</span> {hero.powerstats.intelligence}</p>
      <p><span>Force:</span> {hero.powerstats.strength}</p>
      <p><span>Vitesse:</span> {hero.powerstats.speed}</p>
      <p><span>Durabilité:</span> {hero.powerstats.durability}</p>
      <p><span>Pouvoir:</span> {hero.powerstats.power}</p>
      <p><span>Combat:</span> {hero.powerstats.combat}</p>
    </div>
  );
}
