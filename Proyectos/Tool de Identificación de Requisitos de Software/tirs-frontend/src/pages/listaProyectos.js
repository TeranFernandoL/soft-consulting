import React, {useState} from "react";
import {metodoGeneral} from '../lib/metodos'

import {Container} from 'react-bootstrap';

import {getJsonStorage} from '../lib/jsonStorages'
import useFetch from '../hooks/useFetch';
import TablaProyectos from '../components/ListaProyectos/tablaProyectos'
import FormNuevoProyecto from '../components/ListaProyectos/formNuevoProyecto'
import ModalAgregarProyecto from '../components/Modales/modal'

export default function ListaProyectos() {    
    const proyectos = useFetch('/projects/')

    const [isOpenModalAgregar, setIsOpenModalAgregar] = useState(false);

    const openModalAgregar = () => {
        setIsOpenModalAgregar(true);
    }

    const closeModalAgregar = () => {
        setIsOpenModalAgregar(false);
    }

    const usuario = getJsonStorage('TIRS_usuario');
    

    return (
        <Container>
        <br></br><br></br>
        <h3 style={{textAlign: "center"}}>Lista de Proyectos: {usuario.first_name}</h3>
            <br />
            <>
            <button type="button" className="btn btn-success" onClick = {openModalAgregar}>Nuevo Proyecto</button>
            <br /><br />
            <ModalAgregarProyecto isOpenModal = {isOpenModalAgregar} closeModal= {closeModalAgregar} >
                <FormNuevoProyecto /> 
            </ModalAgregarProyecto>
            <TablaProyectos proyectos = {proyectos}/>
            </>
        </Container>
    );

};