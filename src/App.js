import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from "./containers/Home";
import Creeper from "./containers/Creeper"
import Profile from "./containers/Profile"
import { fetchUser,getAllUsers } from './Redux/actioncreators/useractions'
// import '../stylesheets/Home.scss';


const App = (props) => {

  useEffect(() =>{
    if(localStorage.token) {
      props.fetchUser(localStorage.token)
    }
     console.log("How many times does useEffect updates?")

    console.log("inside of useEffect APP")
  }, [])

  console.log("before the return inside of the APP")
  return (
    <>
    <Header />
    <Switch>
        <Route exact path="/creeper">
          <Creeper />
        </Route>
        
        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
           <Home />
        </Route>

    </Switch>
      {/* <Header />
      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )} */}
    </>
  );
};

export default connect(null, { fetchUser,getAllUsers })(App);