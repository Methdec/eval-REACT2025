// HeroDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <p>Nom réel: {hero.biography["full-name"]}</p>
      <p>Première apparition: {hero.biography["first-appearance"]}</p>
      <p>Publisher: {hero.biography.publisher}</p>
      <p>Alignement: {hero.biography.alignment}</p>
      <p>Intelligence: {hero.powerstats.intelligence}</p>
      <p>Force: {hero.powerstats.strength}</p>
      <p>Vitesse: {hero.powerstats.speed}</p>
      <p>Durabilité: {hero.powerstats.durability}</p>
      <p>Pouvoir: {hero.powerstats.power}</p>
      <p>Combat: {hero.powerstats.combat}</p>
    </div>
  );
}
