import React, {useContext, useState} from 'react';
import './App.css';
import TodoList from "./ToDo/TodoList";
import LoginForm from "./Auth/login";
import 'toastr/build/toastr.min.css';
import Signup from "./Auth/signup";
import Home from "./Home";
import fire from "./config/fire";
import {Redirect, Route, Switch} from "react-router";
import UserContext from "./contexts/user";
import firebase from "firebase";


function PrivateRoute({
                          Component,
                          user,
                          componentProps = {},
                          ...rest
                      }) {

    return (
        <Route
            {...rest}
            render={props =>
                !!user ? (
                    <>
                        <div>{user.email}</div>
                        <Component {...props} {...componentProps} />
                    </>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: null
        });

        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();

    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        })
    }

    render() {

        let todos = [
            {id: 1, completed: false, title: 'Learn JS'},
            {id: 2, completed: false, title: 'Learn CSS'},
            {id: 3, completed: false, title: 'Learn React'}
        ]
        return (<>
                <UserContext.Provider value={this.state.user}>
                    <Switch>
                        <Route
                            path='login'
                            render={props => {
                                if (this.state.user) {
                                    return (
                                        <Redirect
                                            to={{
                                                pathname: props.location.state
                                                    ? props.location.state.from.pathname
                                                    : '/'
                                            }}
                                        />
                                    )
                                } else {
                                    return <LoginForm/>
                                }
                            }}/>
                        <Route exact path='/' component={Home}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/login" component={LoginForm}/>
                        <PrivateRoute path="/todo" Component={TodoList} user={this.state.user}
                                      componentProps={todos}/>
                    </Switch>
                </UserContext.Provider>
            </>
        )
            ;


    }


}

export default App;
