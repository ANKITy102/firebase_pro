import { useState } from "react"
import Form from "./Form"
const ItemForm= ({addopen, setAddopen, setItems}) => {

    return (
        addopen ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setAddopen(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className="text-lg font-medium text-gray-800">
                                Add a New Item
                            </h4>
                            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                onClick={() => setAddopen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <Form setAddopen={setAddopen} setItems={setItems} />
                        
                    </div>
                </div>
            </div>
        ) : ''
    )
}
export default ItemForm