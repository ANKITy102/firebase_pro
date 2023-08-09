import React, { useState } from "react";
import { createItem, getAllItem } from "../firebase/ItemService";

const Form = ({ setAddopen, setItems, buttonName }) => {
  const initialState = {
    name: "",
    weight: "",
  };
  const [itemData, setItemData] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await createItem(itemData);
    const allitem = await getAllItem();
    setItems(allitem);

    setAddopen(false);
  };
  // const editItem = async (e) => {
  //   e.preventDefault();
  //   await updateItem(itemData, item.id);
  //   document.location.reload();
  //   setEdit(false);
  // };
  return (
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
              className="px-6 py-2 text-white bg-orange-400 rounded-md outline-none ring-offset-2 ring-orange-400 focus:ring-2"
              onClick={() => {
                setAddopen(true);
              }}
            >
              {buttonName}
            </button>
            <button
              className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-orange-400 focus:ring-2"
              onClick={() => {
                setAddopen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
