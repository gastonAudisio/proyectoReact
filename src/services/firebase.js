import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDzeTzZBJyhCsfW3tD9c2LTTVal0jXOfUo",
  authDomain: "proyectoreact-1739f.firebaseapp.com",
  projectId: "proyectoreact-1739f",
  storageBucket: "proyectoreact-1739f.appspot.com",
  messagingSenderId: "1018146710761",
  appId: "1:1018146710761:web:776fd1d48b5cab1d127c78"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
  console.log("Conectandonos a firestore", db);
}

export async function getSingleItem(itemid) {
  const docRef = doc(db, "libros", itemid);
  const snapshot = await getDoc(docRef);

  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}

export async function getItems() {
  const productsCollection = collection(db, "libros");
  const querySnapshot = await getDocs(productsCollection);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
}

export function getItemsPromise() {
  return new Promise((resolve, reject) => {
    const productsCollectionRef = collection(db, "libros");
    getDocs(productsCollectionRef).then((querySnapshot) => {
      const dataDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(dataDocs);
    });
  });
}

export async function getItemsByCategory(categoryid) {
  const productsCollectionRef = collection(db, "libros");

  const q = query(productsCollectionRef, where("category", "==", categoryid));

  const querySnapshot = await getDocs(q);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
return dataDocs;
}