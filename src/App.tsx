import React from "react";
import firebase from "firebase";
import { initialiseApp } from "./FirebaseConfig";

initialiseApp();

const db = firebase.firestore();
const users = db.collection("users");

export const App = () => {
    users
        .doc("liampercy123@gmail.com")
        .get()
        .then((d) => console.log(d.data()));
    return <div>test</div>;
};
