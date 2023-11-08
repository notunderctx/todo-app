import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

function MainX() {
  const [Item, setItem] = useState("");
  const [newitem, setNewitem] = useState([]);

  function deleteI(id) {
    const newArray = newitem.filter(item_ => item_.id !== id); 
    setNewitem(newArray);
  }

  const addItem = () => {
    if (!Item) {
      alert("Enter an item");
      return;
    }

    const item = {
      id: uuidv4(), 
      value: Item,
    };

    setNewitem((oldList) => [...oldList, item]);
    setItem("");
  }

  return (
    <div>
      <div>
        <h1 className="todox">Todo app</h1>
        <input
          type="text"
          placeholder="Add an item"
          className="inputt"
          value={Item}
          onChange={(e) => setItem(e.target.value)}
        /><br />
        <div></div><br />
        <div className="jwt">
          <button className="btn" onClick={addItem}>Add item</button> 
        </div>
        <ul className="woow">
          {newitem.map((item) => (
            <li className="liv" key={item.id}>
              <button className="brobtn" onClick={() => deleteI(item.id)}>❌</button>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainX;
