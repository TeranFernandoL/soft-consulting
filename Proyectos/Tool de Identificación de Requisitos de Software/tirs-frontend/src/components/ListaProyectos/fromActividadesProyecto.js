import React from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'



export default function FormActividadesProyecto() {
    const history = useHistory();
    const {id, nombre} = getJsonStorage('modalProps')  
    
    const actividadRequerimientosGenerales = () => {
        history.push(`/requerimientos-generales/${id}`);
        window.location.reload();
    }
    const actividadRequerimientosEspecificos = () => {
        history.push(`/requerimientos-especificos/${id}`);
        window.location.reload();
    }
    const actividadMaquetado = () => {
        history.push(`/maquetado/${id}`);
        window.location.reload();
    }

    return (
        <Form className="m-4">
        <Form.Group >
        <h3 style={{textAlign: "center"}}>Actividades: {nombre}</h3>
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="6">
                <br></br><Form.Label>Seleccionar requerimientos generales: </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="3">
                <br></br><Button onClick={actividadRequerimientosGenerales}>Comenzar</Button>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="6">
                <br></br><Form.Label>Especificar requerimientos personalizados: </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="3">
                <br></br><Button onClick={actividadRequerimientosEspecificos}>Comenzar</Button>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="6">
                <br></br><Form.Label>Iniciar maquetado de interfaces: </Form.Label>
            </Form.Group>
            <Form.Group as={Col} md="1"></Form.Group>
            <Form.Group as={Col} md="3">
                <br></br><Button onClick={actividadMaquetado}>Comenzar</Button>
            </Form.Group>
        </Form.Row>
        
      </Form>
    );

}