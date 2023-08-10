import React, { useEffect, useState } from "react";

const Leaderboard = ({ players, playerScore }) => {
  const [leader, setLeader] = useState([
    {
      name: "",
      score: "",
    },
  ]);
  useEffect(() => {
    let scoresMap = [];
    players.forEach((player, ind) => {
      let obj = {
        name: player.name,
        score: playerScore[ind],
      };
      scoresMap.push(obj);
    });
    scoresMap.sort((a, b) => b.score - a.score);
    setLeader(scoresMap);
    console.log(scoresMap)
  }, [players, playerScore]);
  return (
    <div className="w-max  px-4 md:px-8">
      <div className="mt-12 shadow-sm border px-auto rounded-lg overflow-x-auto">
        <table className="w-full table-auto   text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className=" py-3 px-6">#</th>
              <th className=" py-3 px-6">Nombre</th>
              <th className=" py-3 px-6">Puntuación</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {leader.length > 0 &&
              leader.map((item, ind) => {
                return (
                  <>
                    <tr
                      className={`${
                        ind === 0 ? "bg-red-800 text-white" : ""
                      } ${ind === 1 ? "bg-red-500 text-white" : ""} ${
                        ind === 2 ? "bg-red-200 text-black" : ""
                      }`}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap font-bold text-center  `}
                      >
                        {" "}
                        {ind + 1}{" "}
                      </td>
                      <td
                        key={item.name + "" + ind}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {item.name}
                      </td>
                      <td
                        key={item.score + "" + ind}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {item.score}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
