import React from "react";
import { deleteItem } from "../firebase/ItemService";

const Editdelitems = ({ items,setEditdelItem, setItems, setEdit, setSelectItem, setAddopen }) => {
  const handleDelete = async (id) => {
    await deleteItem(id);
    const filteredArray = items.filter((i) => i.id !== id);
    setItems(filteredArray);
  };
  const handleEdit = async (item) => {
    setEdit(true);
    setSelectItem(item);
  };
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setEditdelItem(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
              <button
            onClick={() => setAddopen(true)}
            className="py-2 px-3 text-center text-white bg-red-600 hover:bg-red-700 rounded-md shadow block lg:inline"
          >
            Añadir Item
          </button>
            <div className="flex gap-x-4 items-center">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setEditdelItem(false)}
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
          </div>
          <div className="w-full mx-auto  px-4 md:px-8">
            <div className="mt-12  mb-12 shadow-sm border px-auto rounded-lg overflow-x-auto">
              <table className="w-full mx-auto table-auto  text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr>
                    <th className="py-3 px-6"></th>

                    <th className="py-3 px-6">Item</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {items.length > 0 &&
                    items.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-right px-6 whitespace-nowrap">
                            <button
                              className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                              onClick={() => handleEdit(item)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0c57ff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                                <line x1="3" y1="22" x2="21" y2="22"></line>
                              </svg>
                            </button>
                            <button
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                              className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-700 duration-150 hover:bg-gray-50 rounded-lg"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
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
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {item.name}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editdelitems;
