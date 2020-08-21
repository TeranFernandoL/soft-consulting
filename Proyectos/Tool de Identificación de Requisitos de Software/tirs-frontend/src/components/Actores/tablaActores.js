import React, {useState} from "react";
import {setJsonStorage} from '../../lib/jsonStorages'
import FormModificarActor from './formModificarActor'
import FormEliminarActor from './formEliminarActor'
import ModalModificarActor from '../Modales/modal'
import ModalEliminarActor from '../Modales/modal'
import {metodoGeneral} from '../../lib/metodos'

export default function TablaActores(props) {
    const {actoresProyecto, idProyecto} = props;
    const [isOpenModalModificar, setIsOpenModalModificar] = useState(false);
    const [isOpenModalEliminar, setIsOpenModalEliminar] = useState(false);
    console.log(actoresProyecto);
    
    if(actoresProyecto.loading || !actoresProyecto.result){
        return "loading..."
    }
    
    const openModalModificar = async (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const descripcion = tr.firstElementChild.nextSibling.nextSibling.textContent;
        const actorModificar = {
            id, nombre, descripcion
        }
        setJsonStorage('modalProps',actorModificar);
        setIsOpenModalModificar(true);
    }    

    const closeModalModificar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalModificar(false);
    }

    const openModalEliminar = (e) => {
        const tr = e.target.parentElement.parentElement;
        const id = tr.firstElementChild.textContent;
        const nombre = tr.firstElementChild.nextSibling.textContent;
        const actorEliminar = {
            id, nombre, idProyecto
        }
        setJsonStorage('modalProps',actorEliminar);
        setIsOpenModalEliminar(true);
    }
    const closeModalEliminar = () => {
        setJsonStorage('modalProps','');
        setIsOpenModalEliminar(false);
    }

    const Actores = actoresProyecto.result;  
    console.log(Actores);
    
    
    return (
        <>
            <ModalModificarActor isOpenModal={isOpenModalModificar} closeModal={closeModalModificar}> <FormModificarActor/>   </ModalModificarActor>
            <ModalEliminarActor isOpenModal={isOpenModalEliminar} closeModal={closeModalEliminar}>    <FormEliminarActor closeModal={closeModalEliminar}/>   </ModalEliminarActor>
            <table className ="table table-hover">
                <thead className = "table-secondary">
                    <tr>
                        <th>Id </th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {Actores.map((actor, index) => {
                        return <Actor key = {actor.id} 
                        actor = {actor}
                        openModalModificar = {openModalModificar}
                        openModalEliminar = {openModalEliminar}
                        />
                    })}
                </tbody>

            </table>
        </>
    )

};

function Actor(props){
    const {actor: {
        id,
        name,
        descripcion,
    },  openModalModificar, openModalEliminar} = props;
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{descripcion}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick={openModalModificar}  >Modificar  </button>{"  "}
                <button type="button" className="btn btn-danger"  onClick={openModalEliminar}   >Eliminar   </button>
            </td>
        </tr>
    );
}

