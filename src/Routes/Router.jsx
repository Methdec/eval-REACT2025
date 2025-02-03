import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../Components/Search/Search";
import HeroDetails from "../Components/HeroDetails/HeroDetails";
import Connect from "../Components/Connect/Connect";
import Contact from "../Components/Contact/Contact";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import NotFound from "../Components/NotFound/NotFound";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/connect" element={<Connect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Search />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/hero/:id" element={<HeroDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
