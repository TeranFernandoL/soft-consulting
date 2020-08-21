import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'

export default function FormModificarRequerimientoEspecifico(){
    const {id, nombre, numeracion, descripcion, costo, prioridad, descripcion_detallada, idProyecto} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre: nombre,
        numeracion: numeracion,
        descripcion: descripcion,
        descripcion_detallada: descripcion_detallada,
        costo: costo,
        prioridad: prioridad
    })


    const onChange = async e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            const modificarRequerimiento = {
              name: formValue.nombre,
              numeracion: formValue.numeracion,
              description: formValue.descripcion,
              descripcion_detallada: formValue.descripcion_detallada,
              cost: formValue.costo,
              priority: formValue.prioridad
            }
            const res = await metodoGeneral(`/requirement/${id}`,'PATCH',modificarRequerimiento)
            window.location.reload();
            
        }     
        setValidated(true)
    }; 

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={onChange} className="m-4">
        <Form.Group >
            <h3 style={{textAlign: "center"}}>Modificar Requerimiento: {nombre}</h3>
        </Form.Group>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Nombre del Requerimiento:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="nombre" defaultValue={nombre} required />
          </Form.Group>
        </Form.Row>
        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Identificador:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="numeracion" defaultValue={numeracion} required />
          </Form.Group>
        </Form.Row>
        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripción:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion" rows="3" defaultValue={descripcion} required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripción detallada:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion_detallada" rows="6" defaultValue={descripcion_detallada} required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Costo($):</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="number" name="costo" defaultValue={costo} required />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Prioridad:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="select" name="prioridad" defaultValue={prioridad}>
                <option value="alta">Alta </option>
                <option value="media">Media</option>
                <option value="baja">Baja </option>
              </Form.Control>
          </Form.Group>
        </Form.Row>
        <br></br>

        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Modificar requerimiento</Button>
        </div>

      </Form>
    );
}
