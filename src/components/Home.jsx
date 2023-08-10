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
import logo from "../assets/logo-share.png"
import logo2 from "../assets/LaLiga logo.png"
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
  const [showList, setShowList] = useState(false);
  return (
    <section className="px-2 sm:px-8 py-3">
      <nav className="flex justify-between items-center border-b-2 border-zinc-500">
        <div className="w-1/3 flex gap-x-4 items-center">
          <img src={logo2} className="w-16" />
          <img src={logo} className="w-32" />
        </div>
        <div className="min-[800px]:hidden block">
        <svg onClick={()=>{setShowList(prev=> !prev)}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff350c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>


        {showList && <div className=" absolute left-0 right-0 gap-y-4 border-2 bg-white mt-4 z-30 mx-8 p-4 rounded-sm flex flex-col justify-center items-center">
          <button
            onClick={() => setEditdelItem(true)}
            className="py-2 px-3 text-center w-full text-white bg-red-500 hover:bg-red-700 rounded-md shadow block lg:inline"
          >
            Items
          </button>
          <button
            onClick={() => setAddopen(true)}
            className="py-2 px-3 text-center w-full text-white bg-red-500 hover:bg-red-600 rounded-md shadow block lg:inline"
          >
            Añadir Item
          </button>
          <button
            onClick={() => {
              setAddPlayer(true);
            }}
            className="py-2 px-3 text-center w-full text-white bg-red-500 hover:bg-red-600 rounded-md shadow block lg:inline"
          >
            Jugadores
          </button>
        </div>}
        </div>
       
        <div className="hidden min-[800px]:flex  gap-x-4 w-1/3 justify-end">
          <button
            onClick={() => setEditdelItem(true)}
            className="py-2 px-3 text-center text-white bg-red-600 hover:bg-red-700 rounded-md shadow block lg:inline"
          >
            Items
          </button>
          <button
            onClick={() => setAddopen(true)}
            className="py-2 px-3 text-center text-white bg-red-600 hover:bg-red-600 rounded-md shadow block lg:inline"
          >
            Añadir Item
          </button>
          <button
            onClick={() => {
              setAddPlayer(true);
            }}
            className="py-2 px-3 text-center text-white bg-red-600 hover:bg-red-600 rounded-md shadow block lg:inline"
          >
            Jugadores
          </button>
        </div>
      </nav>
      <div className=" text-xl text-center p-4 flex items-center justify-center" style={{
          fontFamily:"Roboto"
        }} >Dirección Deportiva - TFM4</div>
      {addopen && (
        <ItemForm
          setItems={setItems}
          addopen={addopen}
          setAddopen={setAddopen}
          buttonName="Añadir Item"
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
          buttonName="Aceptar"
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
          setAddopen={setAddopen}
        />
      )}
      <div>
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
