import React, {useState} from "react";
import {setJsonStorage} from '../../lib/jsonStorages'
import FormModificarRequerimientoEspecifico from './formModificarRequerimientoEspecifico'
import FormEliminarRequerimientoEspecifico from './formEliminarRequerimientoEspecifico'
import ModalModificarRequerimiento from '../Modales/modal'
import ModalEliminarRequerimiento from '../Modales/modal'
import {metodoGeneral} from '../../lib/metodos'

export default function TablaRequerimientosEspecificos(props) {
    const {requerimientosEspecificos, idProyecto} = props;
    const [isOpenModalModificar, setIsOpenModalModificar] = useState(false);
    const [isOpenModalEliminar, setIsOpenModalEliminar] = useState(false);

    if(requerimientosEspecificos.loading || !requerimientosEspecificos.result){
        return "loading..."
    }
    
    const openModalModificar = async (e) => {
        const tr = e.target.parentElement.parentElement;
        const idLabel = tr.id.split('-');
        const id = idLabel[1]
        const numeracion = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const descripcion = tr.firstElementChild.nextSibling.nextSibling.textContent;
        const costo = tr.firstElementChild.nextSibling.nextSibling.nextSibling.textContent;
        const prioridad = tr.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
        const proyecto = await metodoGeneral('/requirement/' + id)
        const descripcion_detallada = proyecto.descripcion_detallada;
        const requerimientoModificar = {
            id, nombre, numeracion, descripcion, costo, prioridad, descripcion_detallada, idProyecto
        }
        console.log(requerimientoModificar);
        
        setJsonStorage('modalProps',requerimientoModificar);
        setIsOpenModalModificar(true);
    }    

    const closeModalModificar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalModificar(false);
    }

    const openModalEliminar = (e) => {
        const tr = e.target.parentElement.parentElement;
        const idLabel = tr.id.split('-');
        const id = idLabel[1]
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const proyectoEliminar = {
            id, nombre, idProyecto
        }
        setJsonStorage('modalProps',proyectoEliminar);
        setIsOpenModalEliminar(true);
    }
    const closeModalEliminar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalEliminar(false);
    }

    const Requerimientos = requerimientosEspecificos.result;  
    
    return (
        <>
            <ModalModificarRequerimiento isOpenModal={isOpenModalModificar} closeModal={closeModalModificar}> <FormModificarRequerimientoEspecifico/>   </ModalModificarRequerimiento>
            <ModalEliminarRequerimiento isOpenModal={isOpenModalEliminar} closeModal={closeModalEliminar}>    <FormEliminarRequerimientoEspecifico closeModal={closeModalEliminar}/>   </ModalEliminarRequerimiento>
            <table className ="table table-hover">
                <thead className = "table-secondary">
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Costo($)</th>
                        <th>Prioridad</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {Requerimientos.map((requerimiento, index) => {
                        return <Requerimiento key = {requerimiento.id} 
                        requerimiento = {requerimiento}
                        openModalModificar = {openModalModificar}
                        openModalEliminar = {openModalEliminar}
                        />
                    })}
                </tbody>

            </table>
        </>
    )

};

function Requerimiento(props){
    const {requerimiento: {
        id,
        numeracion,
        name,
        description,
        priority,
        cost,
    },  openModalModificar, openModalEliminar} = props;
    
    return (
        <tr id={`requerimiento-${id}`}>
            <td>{numeracion}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{cost}</td>
            <td>{priority}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick={openModalModificar}  >Modificar  </button>{"  "}
                <button type="button" className="btn btn-danger"  onClick={openModalEliminar}   >Eliminar   </button>
            </td>
        </tr>
    );
}

