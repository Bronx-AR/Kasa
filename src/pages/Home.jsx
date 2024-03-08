import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";

export default function Home() {
  const location = useLocation();

  return (
    <main>
      <Banner location={location} />
      <section className="cardsContainer">
        {logements.map((location, index) => (
          <Card location={location} key={index} />
        ))}
      </section>
    </main>
  );
}
