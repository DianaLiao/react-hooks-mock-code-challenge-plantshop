import React, {useState} from "react";

function PlantCard({id, name, image, price, deletePlant}) {

  const [inStock, setStock] = useState(true)
  const [priceForm, toggleForm] = useState(false)
  const [newPrice, setNewPrice] = useState(price)

  function toggleStock(){
    setStock(inStock => !inStock)
  }

  function changePrice(event){
    event.preventDefault()

    const fetchObj = {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({price:newPrice})
    }

    fetch(`http://localhost:6001/plants/${id}`, fetchObj)
  }

  return (
    <li className="card">
      <img src={image === ""? "https://via.placeholder.com/400" : image} alt={name} />
      <h4>{name}</h4>
      <p onClick={e=>toggleForm(priceForm => !priceForm)}>Price: {newPrice}</p>
      {priceForm && 
        <form onSubmit={changePrice}>
          <input onChange={e=>setNewPrice(e.target.value)} type="number" placeholder={price} value={newPrice}></input>
          <input type="submit" value="submit new price"></input>
        </form>}
      {inStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
      <button onClick={()=> deletePlant(id)} className="danger">Delete Plant?</button>
    </li>
  );
}

export default PlantCard;
