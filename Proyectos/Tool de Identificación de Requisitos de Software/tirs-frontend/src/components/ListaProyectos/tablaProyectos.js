import React, {useState} from "react";
import useFetch from '../../hooks/useFetch'
import {setFecha} from '../../lib/metodos'
import {Container} from 'react-bootstrap';
import {ruta} from '../../lib/ruta'
import {setJsonStorage} from '../../lib/jsonStorages'

import FormModificarProyecto from './formModificarProyecto'
import FormCompartirProyecto from './formCompartirProyecto'
import FormEliminarProyecto from './formEliminarProyecto'
import FromActividadesProyecto from './fromActividadesProyecto'
import ModalModificarProyecto from '../Modales/modal'
import ModalCompartirProyecto from '../Modales/modal'
import ModalEliminarProyecto from '../Modales/modal'
import ModalActividades from '../Modales/modalSmall'



export default function TablaProyectos(props) {
    const {proyectos} = props
    const [isOpenModalModificar, setIsOpenModalModificar] = useState(false);
    const [isOpenModalCompartir, setIsOpenModalCompartir] = useState(false);
    const [isOpenModalEliminar, setIsOpenModalEliminar] = useState(false);
    const [isOpenModalActividades, setIsOpenModalActividades] = useState(false);
    // const [aux, setAux] = useState({});
     
    const openModalModificar = (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const rubro = tr.firstElementChild.nextSibling.nextSibling.textContent;
        const descripcion = tr.firstElementChild.nextSibling.nextSibling.nextSibling.textContent;
        
        const proyectoModificar = {
            id, nombre, descripcion, rubro
        }
        // setAux(proyectoModificar)
        setJsonStorage('modalProps',proyectoModificar);

        setIsOpenModalModificar(true);
    }
    const closeModalModificar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalModificar(false);
    }

    const openModalCompartir = (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const proyectoCompartir = {
            id
        }

        setJsonStorage('modalProps',proyectoCompartir);

        setIsOpenModalCompartir(true);
    }
    const closeModalCompartir = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalCompartir(false);
    }

    const openModalEliminar = (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const proyectoEliminar = {
            id, nombre
        }

        setJsonStorage('modalProps',proyectoEliminar);
        setIsOpenModalEliminar(true);
    }
    const closeModalEliminar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalEliminar(false);
    }

    const openModalActividades = (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const proyectoActividades = {
            id, nombre
        }

        setJsonStorage('modalProps',proyectoActividades);
        setIsOpenModalActividades(true);
    }
    const closeModalActividades = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalActividades(false);
    }

    if(proyectos.loading || !proyectos.result){
        return "loading..."
    }
          
    const proyects = proyectos.result;    
     
    return (
        <>
            {/* <ModalModificarProyecto isOpenModal={isOpenModalModificar} closeModal={closeModalModificar}>      <FormModificarProyecto aux={aux} setAux={setAux}/>   </ModalModificarProyecto> */}
            <ModalModificarProyecto isOpenModal={isOpenModalModificar} closeModal={closeModalModificar}>      <FormModificarProyecto />   </ModalModificarProyecto>
            <ModalCompartirProyecto isOpenModal={isOpenModalCompartir} closeModal={closeModalCompartir}>      <FormCompartirProyecto />   </ModalCompartirProyecto>
            <ModalEliminarProyecto isOpenModal={isOpenModalEliminar} closeModal={closeModalEliminar}>         <FormEliminarProyecto />    </ModalEliminarProyecto>
            <ModalActividades isOpenModal={isOpenModalActividades} closeModal={closeModalActividades}>        <FromActividadesProyecto/>  </ModalActividades>
            <table className ="table table-hover">
                <thead className = "table-secondary">
                    <tr>
                        <th>Id proyecto</th>
                        <th>Nombre</th>
                        <th>Tipo/Rubro</th>
                        <th>Descripción</th>
                        <th>Fecha Creación</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {proyects.map((proyecto, index) => {
                        return <Proyecto key={proyecto.id} proyecto={proyecto} 
                        openModalModificar = {openModalModificar}
                        openModalCompartir ={openModalCompartir}
                        openModalEliminar ={openModalEliminar}
                        openModalActividades = {openModalActividades}
                        />
                    })}
                </tbody>

            </table>
        </>
    )


};

function Proyecto(props){
    const {proyecto: {
        id,
        name,
        rubro, 
        description,
        creation_date, 
        confirmation
    },  openModalModificar, openModalCompartir, openModalEliminar, openModalActividades} = props;
    
    const fecha_creacion = setFecha(creation_date);

    let estado='';
    if(confirmation == true){
        estado = 'Validado';
    }

    else{
        estado = 'No validado';
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{rubro}</td>
            <td>{description}</td>
            <td>{fecha_creacion}</td>
            <td>{estado}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick={openModalModificar}  >Modificar  </button>{"  "}
                <button type="button" className="btn btn-primary" onClick={openModalCompartir}  >Compartir  </button>{"  "}
                <button type="button" className="btn btn-primary" onClick={openModalModificar}  >Modificar  </button>
                <button type="button" className="btn btn-danger"  onClick={openModalEliminar}   >Eliminar   </button>
                <button type="button" className="btn btn-danger"  onClick={openModalActividades}>Actividades</button>
            </td>
        </tr>
    );
}
