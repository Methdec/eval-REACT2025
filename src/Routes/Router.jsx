import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../Components/Search/Search";
import HeroDetails from "../Components/HeroDetails/HeroDetails";
import Connect from "../Components/Connect/Connect";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/hero/:id" element={<HeroDetails />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
  );
}
