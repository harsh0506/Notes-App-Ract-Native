import { async } from "@firebase/util";
import { updateDoc, deleteDoc,where, serverTimestamp, getDocs, orderBy, query, setDoc, doc, getFirestore, onSnapshot, collection } from "firebase/firestore";
import { app } from "./FirebaseConfig"

const db = getFirestore(app);
const NotesRef = collection(db, "users");

export async function set(data) {
    await setDoc(doc(NotesRef), data);
}

export async function get() {
    try {
        let a = []
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((m) => {
            a.push({ id: m.id, note: m.data() })
        })
        return a

    } catch (error) {
        console.log(error)
    }

}

export async function update(id, data) {
    try {
        const myDocRef = doc(db, 'users', id);
        await setDoc(myDocRef, data, { merge: true });
        console.log("done")
    } catch (error) {
        console.log(error)
    }

}

export async function deleteDocs(id) {
    try {
        console.log(id)
        const myDocRef = doc(db, 'users', id);
        await deleteDoc(myDocRef);
    } catch (error) {
        console.log(error)
    }
}

//get request for tag query
export async function getTag(){
    try {
        let a = []
        const q = query(collection(db, "users"),where("addTag","!=",false));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((m) => {
            a.push({ id: m.id , tag:m.data()})
        })
        return a
    } catch (error) {
        console.log(error)
    }
}

//get request for various tag
export async function getSomething(data){
    try {
        let a = []
        const q = query(collection(db, "users"), where("addTag", "==", data));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((m) => {
            a.push({ id: m.id , tag:m.data()})
        })
        return a
    } catch (error) {
        console.log(error)
    }
}
