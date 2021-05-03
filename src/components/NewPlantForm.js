import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [plantName, setPlantName] = useState("")
  const [plantUrl, setPlantUrl] = useState("")
  const [plantPrice, setPlantPrice] = useState(0.00)

  const formData = {
    name: plantName,
    image: plantUrl,
    price: plantPrice
  }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => addPlant(e, formData)}>
        <input onChange={e => setPlantName(e.target.value)} type="text" name="name" placeholder="Plant name" value={plantName}/>
        <input onChange={e => setPlantUrl(e.target.value)} type="text" name="image" placeholder="Image URL" value={plantUrl}/>
        <input onChange={e => setPlantPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" value={plantPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
