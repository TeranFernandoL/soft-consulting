import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Error404 from '../../pages/error404'
import Home from '../../pages/home'
import ListaProyectos from '../../pages/listaProyectos'
import Login from '../../pages/login'
import Documentacion from '../../pages/documentacion'
import Registro from '../../pages/registro'
import RequerimientosGenerales from '../../pages/requerimientosGenerales'
import RequerimientosEspecificos from '../../pages/requerimientosEspecificos'
import Validacion from '../../pages/validacion'
import Actores from '../../pages/actores'
import Navegacion from './Navegacion'

export default function Rutas() {
    const [state, setState] = useState(false);

    return(
        <Router>
            <Navegacion state={state}/>

            <Switch>
                <Route path="/" exact={true}>
                    <Home setState={setState} state={false}/>
                </Route>

                <Route path="/login" exact={true}>
                    <Login setState={setState}state={false}/>
                </Route>

                <Route path="/registro" exact={true}>
                    <Registro setState={setState} state={false}/>
                </Route>

                <Route path="/requerimientos-generales/:id" exact={true}>
                    <RequerimientosGenerales setState={setState} state={true}/>
                </Route>

                <Route path="/requerimientos-especificos/:id" exact={true}>
                    <RequerimientosEspecificos setState={setState} state={true}/>
                </Route>

                <Route path="/listaProyectos" exact={true}>
                    <ListaProyectos setState={setState} state={false}/>
                </Route>

                <Route path="/documentacion/:id" exact={true}>
                    <Documentacion setState={setState} state={true}/>
                </Route>
                
                <Route path="/actores/:id" exact={true}>
                    <Actores setState={setState} state={true}/>
                </Route>

                <Route path="/validacion/:id" exact={true}>
                    <Validacion setState={setState} state={true}/>
                </Route>

                <Route path="*"><Error404/></Route>
            </Switch>
        </Router>
    )
};
