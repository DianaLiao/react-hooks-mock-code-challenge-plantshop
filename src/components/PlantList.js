import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant}) {

  const cards = plants.map(plant => {
    return <PlantCard deletePlant={deletePlant} key={plant.id} {...plant} />
  })

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlantList;
