import React, {useState} from "react";
import {Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import {getJsonStorage, setJsonStorage} from '../lib/jsonStorages'
import useFetch from '../hooks/useFetch';
import ModalAgregarActor from '../components/Modales/modal'
import FormNuevoActor from '../components/Actores/formNuevoActor'
import TablaActores from '../components/Actores/tablaActores'

export default function Actores(props) {    
    const {id} = useParams();
    const {setState} = props; setState(id);
    const actores = useFetch(`/projects/${id}/actor`)
    const nombreProyecto = getJsonStorage('TIRS_proyecto')

    const [isOpenModalAgregar, setIsOpenModalAgregar] = useState(false);
    const openModalAgregar = () => {
        setJsonStorage('modalProps',{idProyecto: id});
        setIsOpenModalAgregar(true);
    }
    const closeModalAgregar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalAgregar(false);
    }
    console.log(actores);
    
    return (
        <Container>
        <br></br><br></br>
        <h3 style={{textAlign: "center"}}>{nombreProyecto} - Requerimientos Especificos</h3>
        <br></br>
            <button type="button" className="btn btn-success" onClick = {openModalAgregar}>Nuevo Actor</button>
            <ModalAgregarActor isOpenModal = {isOpenModalAgregar} closeModal= {closeModalAgregar} ><FormNuevoActor /> </ModalAgregarActor>
            <br /><br />
            <TablaActores actoresProyecto = {actores} idProyecto = {id}/>
        </Container>
    );
};