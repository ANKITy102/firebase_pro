import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./firebase";
const itemRef = await collection(db, "Items");

export const createItem = async (itemData) => {
    const { name, weight } = itemData;
    try {
        const item = await addDoc(itemRef, {
            name: name,
            weight: weight
        })
        return item;
    } catch (error) {
        console.log(error)
        alert("some error occured");
    }
}
export const getAllItem = async () => {
    try {
        const items = await getDocs(itemRef)
        const filteredData = items.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return filteredData;
    } catch (error) {
        alert("some error occured");
    }
}
export const updateItem = async (itemData, id) => {
    const { name, weight } = itemData;
    try {
        const itemDoc = doc(db, "Items", id);
        const updatedItem = await updateDoc(itemDoc, {
            name,
            weight
        })
        return updatedItem
    } catch (error) {
        alert("some error occured");
    }
}
export const deleteItem = async (id) => {
    try {
        const itemDoc = doc(db, "Items", id);
        await deleteDoc(itemDoc)
    } catch (error) {
        alert("some error occured");
    }
}