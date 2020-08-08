import React from 'react';
import {Container, Navbar, Button} from 'react-bootstrap';
import LogoRedux from '../../public/redux.png';
import {setJsonStorage} from '../../lib/jsonStorages';

import '../../public/nav.scss';

export default function Nav(){
    return (
        <div className="nav-body">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
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
                    {Deslogueo()}
                </Container>
            </Navbar>
        </div>
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
        <Button href='/' onClick={deslogueo}>Deslogueo</Button>
    )
}

