import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setPlants(data))
  },[])

  function addPlant(event, data){
    event.preventDefault()
    const fetchObj={
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    }
    fetch("http://localhost:6001/plants", fetchObj)
      .then(resp => resp.json())
      .then(newPlant => setPlants([...plants, newPlant]))
  }

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchText)
  })

  function deletePlant(id){
    fetch(`http://localhost:6001/plants/${id}`, {method: "DELETE"})
    setPlants(plants => plants.filter(plant => plant.id !== id))
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchText={searchText} setSearch={setSearch} />
      <PlantList plants={filteredPlants} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
