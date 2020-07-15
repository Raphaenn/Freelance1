import React from "react";
import {Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Home from "../pages/Home";
import Details from "../pages/Details";
import New from "../pages/New";
import Categorias from "../pages/Categorias";
import Tickets from "../pages/Tickets";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/register" component={SignUp}/>
            <Route path="/home" component={Home} isPrivate/>
            <Route path="/novo" component={New} isPrivate/>
            <Route path="/detalhes" component={Details} isPrivate/>
            <Route path="/categorias" component={Categorias} isPrivate/>
            <Route path="/tickets" component={Tickets} isPrivate/>
        </Switch>
    )
}