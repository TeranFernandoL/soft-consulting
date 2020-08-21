import React from 'react';
import {Container, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import LogoRedux from '../../public/redux.png';
import {setJsonStorage} from '../../lib/jsonStorages';

import '../../public/nav.scss';

export default function Navegacion(props){
    const {state} = props;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {labelTIRS()}
                {barraNavegacion(state)}
                <Form inline>
                    {Deslogueo()}
                </Form>
            </Container>
      </Navbar>
    );
}

function Deslogueo(){
    const token = localStorage.getItem('TIRS_token');
    if(token.length < 3) return (<></>)
    
    const deslogueo = () => {
        setJsonStorage('TIRS_token', '');
        setJsonStorage('TIRS_usuario', '');
        setJsonStorage('modalProps', '');
    }
    return(
        <Button href='/' onClick={deslogueo} variant="outline-info" >Deslogueo</Button>
    )
}

function labelTIRS(){
    const token = localStorage.getItem('TIRS_token');
    if(token.length < 3) 
    return (
        <Navbar.Brand href="/">
            <img 
                alt="Planilla Fugusa" 
                src={LogoRedux}
                id='LogoRedux'
                width="30"
                height="30"
                className="d-inline-block aling top mr-4"
            />
            TIRS
        </Navbar.Brand>
    )
    return (
        <Navbar.Brand href="/ListaProyectos">
        <img 
            alt="Planilla Fugusa" 
            src={LogoRedux}
            id='LogoRedux'
            width="30"
            height="30"
            className="d-inline-block aling top mr-4"
        />
        TIRS
    </Navbar.Brand>
    );
}

function barraNavegacion(state){
    const token = localStorage.getItem('TIRS_token');
    if(token.length < 3 || state == false) return (<></>)

    return(
        <Nav className="mr-auto">
            <Nav.Link href={`/actores/${state}`}>Actores</Nav.Link>
            <Nav.Link href={`/requerimientos-generales/${state}`}>Req. generales</Nav.Link>
            <Nav.Link href={`/requerimientos-especificos/${state}`}>Req. especificos</Nav.Link>
            <Nav.Link href={`/documentacion/${state}`}>Doc.</Nav.Link>
        </Nav>
    )
}
