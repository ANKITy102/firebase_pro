import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import { getAllItem } from "../firebase/ItemService";
import Tablecomp from "./Tablecomp";

const Home = () => {
  const [addopen, setAddopen] = useState(false);
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const getitems = await getAllItem();
    setItems(getitems);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <section className="p-8">
      <nav className="flex justify-between">
        <div>logo</div>
        <div className="flex gap-x-8">
          <button
            onClick={() => setAddopen(true)}
            className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
          >
            Add Item
          </button>
          <button
            onClick={() => {
              console.log(6);
            }}
            className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
          >
            Add Player
          </button>
        </div>
      </nav>
      {addopen && (
        <ItemForm
          setItems={setItems}
          addopen={addopen}
          setAddopen={setAddopen}
        />
      )}
      <Tablecomp items={items} setItems={setItems} />
    </section>
  );
};

export default Home;
