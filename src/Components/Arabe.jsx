import React, { useState } from "react";
import { Card } from "./Card";
import cardList from "./cardList";
import './card.css'

export default function Arabe() {
  return (
    <>
      <div className="Matiere">
        {cardList.map((cardList) => (
          <Card
            key={cardList.id}
            image={cardList.image}
            name={cardList.name}
            
          />
        ))}
      </div>
    </>
  );
}
