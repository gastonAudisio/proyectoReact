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
//1. Iniciar la conexión a Firestore


const firebaseConfig = {
  apiKey: "AIzaSyD7RXW7fbiMn4JKTcCxOCBZ61JVsX0djNA",
  authDomain: "proyecto-react-3bfa8.firebaseapp.com",
  projectId: "proyecto-react-3bfa8",
  storageBucket: "proyecto-react-3bfa8.appspot.com",
  messagingSenderId: "1073642690908",
  appId: "1:1073642690908:web:c1dfcef28d1fba2674c999",
  measurementId: "G-WJW5E8H6KE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
  console.log("Conectandonos a firestore", db);
}

//1. Obtener un producto
export async function getSingleItem(itemid) {
  const docRef = doc(db, "libros", itemid);
  const snapshot = await getDoc(docRef);

  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}

//2. Obtener todos los productos para el ILC
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

//3. Obtener los productos según su category
export async function getItemsByCategory(categoryid) {
  const productsCollectionRef = collection(db, "libros");

  const q = query(productsCollectionRef, where("category", "==", categoryid));

  const querySnapshot = await getDocs(q);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  console.log(dataDocs);
}