import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="cardsContainer">
        {logements.map((location, index) => (
          <Card location={location} key={index} />
        ))}
      </section>
    </main>
  );
}
