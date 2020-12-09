import React, {useContext, useEffect, useState} from "react";
import fire from "./config/fire";
import UserContext from "./contexts/user";
import {Redirect} from "react-router";
import firebase from "firebase";
import BookInput from "./bookInput";

export default function Home(props) {

    const [books, setBooks] = useState([]);
    const [newBookName, setNewBookName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("books").get();
            setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData();
    }, [])

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection('books').doc(books.length).add({name: newBookName});
    }

    function logout() {
        fire.auth().signOut();
    }akdshfsd

    const user = useContext(UserContext);

    return (
        <>
            <h1>Welcome Home</h1>
            {
                console.log(user)}
            {!user ? (
                    <>
                        <a href="/signup">Sign up</a>
                        <a href="/login">Sign in</a>
                    </>
                ) :
                (
                    <>
                        <button onClick={logout}>Sign out</button>
                        <ul>
                            <input value={newBookName}
                            onChange={e => setNewBookName(e.target.value)}
                            />
                            <button onClick={onCreate}>Add Book</button>
                            {books.map(book => (
                                <li key={book.id}>
                                    <BookInput book={book}/>
                                </li>
                            ))}
                        </ul>
                    </>
                )}


        </>
    )

}

