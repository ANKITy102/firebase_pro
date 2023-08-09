import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import { getAllItem } from "../firebase/ItemService";
import Tablecomp from "./Tablecomp";
import EditForm from "./EditForm";
import PlayerForm from "./PlayerForm";
import { getAllPlayers } from "../firebase/PlayerService";
import EditPlayer from "./EditPlayer";
import Editdelitems from "./Editdelitems";
import Leaderboard from "./Leaderboard";

const Home = () => {
  const [addopen, setAddopen] = useState(false);
  const [items, setItems] = useState([]);
  const [players, setPlayers] = useState([]);
  const [editmode, setEdit] = useState(false);
  const [selectItem, setSelectItem] = useState({});
  const [selectPlayer, setSelectPlayer] = useState({});
  const [addPlayer, setAddPlayer] = useState(false);
  const [editPlayer, setEditPlayer] = useState(false);
  const [editdelItem, setEditdelItem] = useState(false);
  const [playerScore, setPlayerScore] = useState([]);

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
        <div className="flex gap-x-4">
          <button
            onClick={() => setEditdelItem(true)}
            className="py-2 px-3 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
          >
            Edit Item
          </button>
          <button
            onClick={() => setAddopen(true)}
            className="py-2 px-3 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
          >
            Add Item
          </button>
          <button
            onClick={() => {
              setAddPlayer(true);
            }}
            className="py-2 px-3 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
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
      {editPlayer && (
        <EditPlayer
          editPlayer={editPlayer}
          setEditPlayer={setEditPlayer}
          players={players}
          setPlayers={setPlayers}
          selectPlayer={selectPlayer}
          items={items}
        />
      )}
      {editdelItem && (
        <Editdelitems
          setEditdelItem={setEditdelItem}
          items={items}
          setItems={setItems}
          setEdit={setEdit}
          setSelectItem={setSelectItem}
        />
      )}
      <div className="px-3">
        <Tablecomp
          items={items}
          setItems={setItems}
          setEdit={setEdit}
          setSelectItem={setSelectItem}
          setSelectPlayer={setSelectPlayer}
          players={players}
          setPlayers={setPlayers}
          setEditPlayer={setEditPlayer}
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
        />
      </div>
      <div className="p-3">
        <Leaderboard players={players} playerScore={playerScore}/>
      </div>
    </section>
  );
};

export default Home;
