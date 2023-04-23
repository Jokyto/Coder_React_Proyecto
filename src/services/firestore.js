import {getFirestore,orderBy,collection, getDocs, doc, getDoc, query, where,addDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import products from "../data/products";

const firebaseConfig = {
  apiKey: "AIzaSyCagNp4YXA5mkBf60lTmwabMKFNvhWvVw0",
  authDomain: "coderhouse-reactjs-proyecto.firebaseapp.com",
  projectId: "coderhouse-reactjs-proyecto",
  storageBucket: "coderhouse-reactjs-proyecto.appspot.com",
  messagingSenderId: "1069300239722",
  appId: "1:1069300239722:web:b9f5f49023c46639c72913"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItemsFire(){
    const productsRef = collection(db, "products");

    const q = query(productsRef,orderBy("index"));
    const productSnapshot = await getDocs(q);
    const documents = productSnapshot.docs;
    const docsData = documents.map((doc) => {
        return {id:doc.id,...doc.data()}
    });
    return docsData
}

export async function getSingleItemFire(idURL){
    const docRef = doc(db, "products" ,idURL);
    const docSnap = await getDoc(docRef);
    return {id:docSnap.id,...docSnap.data()}
}

export async function getItemsByCategoryFire(categoryID){
    const q = query(collection(db,"products"),where("category","==",categoryID))
    const productSnapshot = await getDocs(q)
    const documents = productSnapshot.docs;
    const docsData = documents.map((doc) => {
        return {id:doc.id,...doc.data()}
    });
    return docsData
}

export async function createOrder(order){
    const collectionOrdersRef = collection(db, "orders");
    const respuesta = await addDoc(collectionOrdersRef, order);
    return respuesta.id;
}

export async function exportData(){
    const collectionRef = collection(db, "products")
    for (let element of products) {
        element.index = element.id;
        delete element.id;
        const respuesta = await addDoc(collectionRef,element)
        console.log("producto exportado con ID: " + respuesta.id)
    }
}
