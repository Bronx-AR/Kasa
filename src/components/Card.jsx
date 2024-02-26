import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

export default function Card() {
  return (
    <section className="cardsContainer">
      {logements.map((location, index) => (
        <Link
          to={"/fiche-logement" + location.id}
          key={index + "" + location.id}
        >
          <article>
            <img src={location.cover} alt={location.title} />
            <h2>{location.title}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
}
