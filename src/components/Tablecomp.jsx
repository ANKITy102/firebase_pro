import React, { useEffect } from "react";
import { deleteItem, getAllItem } from "../firebase/ItemService";

const Tablecomp = ({ items, setItems }) => {
 
  const handleDelete = async (id) => {
    await deleteItem(id);
    const filteredArray = items.filter((i) => i.id != id);
    setItems(filteredArray);
  };
  return (
    <div className="w-max mx-auto px-4 md:px-8">
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6"></th>

              <th className="py-3 px-6">Item Name</th>
              <th className="py-3 px-6">Item Weight</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {items.length > 0 &&
              items.map((item, idx) => (
                <tr key={idx}>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.weight}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablecomp;
