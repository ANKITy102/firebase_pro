import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./firebase";
const playerRef = await collection(db, "Players");

export const createPlayer = async (playerData) => {
    try {
        const player = await addDoc(playerRef, playerData)
        return player;
    } catch (error) {
        console.log(error)
        alert("some error occured");
    }
}
export const getAllPlayers = async () => {
    try {
        const players = await getDocs(playerRef)
        const filteredData = players.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return filteredData;
    } catch (error) {
        alert("some error occured");
    }
}

export const deletePlayer = async (id) => {
    try {
        const playerDoc = doc(db, "Players", id);
        await deleteDoc(playerDoc)
    } catch (error) {
        alert("some error occured");
    }
}

export const updateItem = async (playerData, id) => {

    try {
        const playerDoc = doc(db, "Players", id);
        const updatedPlayer = await updateDoc(playerDoc, playerData);
        return updatedPlayer;
    } catch (error) {
        alert("some error occured");
    }
}