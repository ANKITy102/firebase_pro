import React, { useState } from "react";
import { createPlayer, getAllPlayers } from "../firebase/PlayerService";

const PlayerForm = ({ addPlayer, setAddPlayer, items ,setPlayers}) => {
  const [playerData, setPlayerData] = useState({
    name: "",
    value: {},
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setPlayerData({ ...playerData, [name]: value });
    } else {
      setPlayerData({
        ...playerData,
        value: { ...playerData.value, [name]: value },
      });
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await createPlayer(playerData);
    const allitem = await getAllPlayers();
    setPlayers(allitem);
    setAddPlayer(false);
  };
  return (
    <>
      {addPlayer ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setAddPlayer(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <h4 className="text-lg font-medium text-gray-800">
                Añadir nuevo jugador
                </h4>
                <button
                  className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={() => setAddPlayer(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <main className="w-full h-full flex flex-col items-center justify-center px-4">
                <div className="max-w-sm w-full text-gray-600">
                  <form className="mt-8  space-y-5" onSubmit={onSubmitHandler}>
                    <div>
                      <label htmlFor="player_name" className="font-medium">
                      Nombre
                      </label>
                      <input
                        id="player_name"
                        type="text"
                        required
                        name="name"
                        onChange={handleChange}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
                      />
                    </div>
                    <div className="h-[300px] overflow-y-auto ">

                    {items.length > 0 &&
                      items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-x-8"
                        >
                          <label htmlFor={item.id} className="w-full font-medium">
                            {item.name}
                          </label>
                          <input
                            id={item.id}
                            onChange={handleChange}
                            value={playerData.value[item.id]}
                            type="number"
                            max={9}
                            min={1}
                            required
                            name={item.id}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 p-4 mt-5">
                      <button
                        className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
                        onClick={() => {
                          setAddPlayer(true);
                        }}
                      >
                        Añadir
                      </button>
                      <button
                        className="px-6 py-2 text-gray-800 border hover:bg-slate-300 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
                        onClick={() => {
                          setAddPlayer(false);
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PlayerForm;
