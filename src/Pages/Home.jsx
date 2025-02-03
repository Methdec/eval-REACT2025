import React from "react";
import { useAuth } from "../auth/AuthProvider";
import Search from "../Components/Search/Search";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <h1>Bienvenue sur mon site</h1>
      {user ? (
        <>
          <Search />
          <p>Vous pouvez chercher un super héros grâce à la barre de recherche ci-dessus, amusez-vous !</p>
        </>
      ) : (
        <p>Connectez-vous pour accéder à la fonctionnalité de recherche.</p>
      )}
    </>
  );
}
