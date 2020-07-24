import React, {useState} from "react";
import {metodoGeneral} from '../lib/metodos'

import {Container} from 'react-bootstrap';

import {getJsonStorage} from '../lib/jsonStorages'
import useFetch from '../hooks/useFetch';
import TablaProyectos from '../components/ListaProyectos/tablaProyectos'
import FormNuevoProyecto from '../components/ListaProyectos/formNuevoProyecto'
import Modal from '../components/Modales/modal'
import ModalDos from '../components/Modales/modal'

export default function ListaProyectos() {    
    const proyectos = useFetch('/projects/')
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    return (
        <>
            <br></br><br></br>
            <h3 style={{textAlign: "center"}}>Lista de Proyectos</h3>
            <Container>
                <br />
                <>
                <button type="button" className="btn btn-success" onClick = {openModal}>Nuevo Proyecto</button>
                <br /><br />
                <Modal isOpenModal = {isOpenModal} closeModal= {closeModal}><FormNuevoProyecto /></Modal>
                <TablaProyectos proyectos = {proyectos}/>
                </>
            </Container>
            
        </>
    );

};
