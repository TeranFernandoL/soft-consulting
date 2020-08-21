import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import {getJsonStorage, setJsonStorage} from '../lib/jsonStorages'
import ModalAgregarRequerimiento from '../components/Modales/modal'
import FormNuevoRequerimientoEspecifico from '../components/RequerimientosEspecificos/formNuevoRequerimientoEspecifico';
import TablaRequerimientosEspecificos from '../components/RequerimientosEspecificos/tablaRequerimientosEspecificos'

export default function RequerimientosEspecificos(props) {
    const {id} = useParams();
    const {setState} = props; setState(id);
    const requerimientosEspecificos = useFetch('/requirement/project/' + id);
    const nombreProyecto = getJsonStorage('TIRS_proyecto')

    const [isOpenModalAgregar, setIsOpenModalAgregar] = useState(false);
    const openModalAgregar = () => {
        setJsonStorage('modalProps',{idProyecto: id});
        setIsOpenModalAgregar(true)
    }
    const closeModalAgregar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalAgregar(false);
    }
    
    return (
        <Container>
        <br></br><br></br>
        <h3 style={{textAlign: "center"}}> {nombreProyecto} - Requerimientos Especificos</h3>
        <br></br>
            <button type="button" className="btn btn-success" onClick={openModalAgregar}>Nuevo Requerimiento</button>
            <ModalAgregarRequerimiento isOpenModal={isOpenModalAgregar} closeModal={closeModalAgregar}> <FormNuevoRequerimientoEspecifico /> </ModalAgregarRequerimiento>  
            <br /><br />
            <TablaRequerimientosEspecificos requerimientosEspecificos = {requerimientosEspecificos} idProyecto = {id}/>
        </Container>
    )
};
