import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=> {
    fetch("  http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((data)=>setPlants(data))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  let filteredArray;

  function handleSearch(e) {
    setSearchTerm(e.target.value)
    console.log(searchTerm)

    if(plants) {
      filteredArray = plants.filter((plant)=>{
        return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }
    console.log(filteredArray)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList />
    </main>
  );
}

export default PlantPage;
