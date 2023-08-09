import React, { useState } from "react";
import { getAllItem, updateItem } from "../firebase/ItemService";

const EditForm = ({ setItems, setEdit, editmode, buttonName, selectItem }) => {
  const initialState = {
    name: selectItem.name,
    weight: selectItem.weight,
  };
  const [itemData, setItemData] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await updateItem(itemData, selectItem.id);
    const allitem = await getAllItem();
    setItems(allitem);

    setEdit(false);
  };
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setEdit(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">Edit Item</h4>
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setEdit(false)}
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
              <form onSubmit={onSubmitHandler} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="item_name" className="font-medium">
                    Item Name
                  </label>
                  <input
                    id="item_name"
                    type="text"
                    required
                    name="name"
                    onChange={onChangeHandler}
                    value={itemData.name}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="item_weight" className="font-medium">
                    Item Weight
                  </label>
                  <input
                    id="item_weight"
                    type="number"
                    required
                    name="weight"
                    onChange={onChangeHandler}
                    value={itemData.weight}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-400 shadow-sm rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-3 p-4 mt-5">
                  <button
                    type="submit"
                    className="px-6 py-2 text-white bg-orange-400 rounded-md outline-none ring-offset-2 ring-orange-400 focus:ring-2"
                  >
                    {buttonName}
                  </button>
                  <button
                    className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-orange-400 focus:ring-2"
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
