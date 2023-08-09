import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import { getAllItem } from "../firebase/ItemService";
import Tablecomp from "./Tablecomp";
import EditForm from "./EditForm";
import PlayerForm from "./PlayerForm";
import { getAllPlayers } from "../firebase/PlayerService";

const Home = () => {
  const [addopen, setAddopen] = useState(false);
  const [items, setItems] = useState([]);
  const [players,setPlayers]=useState([]);
  const [editmode, setEdit] = useState(false);
  const [selectItem, setSelectItem] = useState({});
  const [addPlayer, setAddPlayer] = useState(false);
  const getItems = async () => {
    const getitems = await getAllItem();
    console.log(getitems);
    setItems(getitems);
  };
  const getplayers = async () => {
    const getallplayers = await getAllPlayers();
    // console.log(getallplayers)
    setPlayers(getallplayers);
  };
  useEffect(() => {
    getItems();
    getplayers();

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
              setAddPlayer(true)
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
          buttonName="Add Item"
        />
      )}
      {addPlayer && (
        <PlayerForm
            addPlayer={addPlayer}
            setAddPlayer={setAddPlayer}
            items={items}
            setPlayers={setPlayers}
          />
      )}
      {editmode && (
        <EditForm
          setItems={setItems}
          setEdit={setEdit}
          editmode={editmode}
          buttonName="Edit Item"
          selectItem={selectItem}
        />
      )}

      <div className="px-3">
        <Tablecomp
          items={items}
          setItems={setItems}
          setEdit={setEdit}
          setSelectItem={setSelectItem}
          players={players}
          setPlayers={setPlayers}
        />
      </div>
    </section>
  );
};

export default Home;
