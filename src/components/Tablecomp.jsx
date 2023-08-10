import React, { useEffect, useState } from "react";
import { deleteItem } from "../firebase/ItemService";
import { deletePlayer } from "../firebase/PlayerService";

const Tablecomp = ({
  items,
  setItems,
  setEdit,
  setSelectItem,
  players,
  setPlayers,
  setEditPlayer,
  setSelectPlayer,
  setPlayerScore,
  playerScore
}) => {
  const handleDelete = async (id) => {
    await deleteItem(id);
    const filteredArray = items.filter((i) => i.id !== id);
    setItems(filteredArray);
  };
  const handleplayerdelete = async (id) => {
    await deletePlayer(id);
    const filteredArray = players.filter((i) => i.id !== id);
    setPlayers(filteredArray);
  };
  const handleEdit = async (item) => {
    setEdit(true);
    setSelectItem(item);
  };
  const handlePlayerEdit = async (player) => {
    setEditPlayer(true);
    setSelectPlayer(player);
  };

 
  useEffect(() => {
    let vec = [];
    console.log(players);
    console.log(items);
    players.forEach((player) => {
      let score = 0;
      items.forEach((item) => {
        let add = player.value[item.id] ? parseInt(player.value[item.id]) : 0;
        add = add * parseInt(item.weight);
        score += add;
      });
      vec.push(score);
      console.log(score);
    });
    setPlayerScore(vec);
  }, [items, players]);
  return (
    <div className="max-w-full px-2 sm:px-4 md:px-8">
      <div className="mt-12 shadow-sm border px-auto rounded-lg overflow-x-auto">
        <table className="w-full table-auto  text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Item Name</th>
              {players.length > 0 &&
                players.map((item, idx) => {
                  return (
                    <th key={item.id} className=" py-3 px-6">
                      <span> {item.name}</span>
                      <button
                        onClick={() => {
                          handleplayerdelete(item.id);
                        }}
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ff0c0c"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          handlePlayerEdit(item);
                        }}
                        className="py-2 leading-none font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-file-edit"
                        >
                          <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
                        </svg>
                      </button>
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {items.length > 0 &&
              items.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>

                    {players.length > 0 &&
                      players.map((player, idx) => {
                        return (
                          <td key={idx} className="px-6 py-4 whitespace-nowrap">
                            {`${
                              player.value[item.id] ? player.value[item.id] : 0
                            }`}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}

            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-bold">Total</td>
              {playerScore.length > 0 &&
                playerScore.map((score, ind) => {
                  console.log(score);
                  return (
                    <td
                      key={score + "" + ind}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {score}
                    </td>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablecomp;
