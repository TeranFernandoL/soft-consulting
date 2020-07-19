import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Error404 from '../../pages/error404'
import Home from '../../pages/home'
import ListaProyectos from '../../pages/listaProyectos'
import Login from '../../pages/login'
import Maquetado from '../../pages/maquetado'
import Registro from '../../pages/registro'
import Requerimientos from '../../pages/requerimientos'
import Validacion from '../../pages/validacion'


export default function Rutas() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>

                <Route path="/login" exact={true}>
                    <Login />
                </Route>

                <Route path="/registro" exact={true}>
                    <Registro />
                </Route>

                <Route path="/requerimientos" exact={true}>
                    <Requerimientos />
                </Route>

                <Route path="/listaProyectos" exact={true}>
                    <ListaProyectos />
                </Route>

                <Route path="/maquetado" exact={true}>
                    <Maquetado />
                </Route>

                <Route path="/validacion" exact={true}>
                    <Validacion />
                </Route>

                <Route path="*"><Error404/></Route>
            </Switch>

        </Router>
    )
};
