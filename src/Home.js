import React, {useContext} from "react";
import fire from "./config/fire";
import UserContext from "./contexts/user";
import {Redirect} from "react-router";

export default function Home(props) {

    function logout() {
        fire.auth().signOut();
    }



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
            <button onClick={logout}>Sign out</button>
            )}


        </>
    )

}