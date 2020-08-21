import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'

export default function FormNuevoRequerimientoEspecifico(){
    const {idProyecto} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre: '',
        numeracion: '',
        descripcion: '',
        descripcion_detallada: '',
        costo: 0,
        prioridad: 'alta'
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
            const nuevoRequerimiento = {
              name: formValue.nombre ,
              numeracion: formValue.numeracion ,
              description: formValue.descripcion ,
              descripcion_detallada: formValue.descripcion_detallada ,
              cost: formValue.costo,
              priority: formValue.prioridad,
              show: true
            }
            const res = await metodoGeneral(`/requirement/project/${idProyecto}`,'POST',nuevoRequerimiento);
            console.log(res);
            window.location.reload();
            
        }     
        setValidated(true)
    }; 

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={onChange} className="m-4">
        <Form.Group >
            <h3 style={{textAlign: "center"}}>Nuevo Requerimiento</h3>
        </Form.Group>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Nombre del Requerimiento:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="nombre" required />
          </Form.Group>
        </Form.Row>
        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Identificador:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="numeracion" required />
          </Form.Group>
        </Form.Row>
        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripción:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion" rows="3" required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Descripción detallada:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="textarea" name="descripcion_detallada" rows="6" required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Costo($):</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="number" name="costo" required />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Prioridad:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control as="select" name="prioridad">
                <option value="alta">Alta </option>
                <option value="media">Media</option>
                <option value="baja">Baja </option>
              </Form.Control>
          </Form.Group>
        </Form.Row>
        <br></br>

        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Agregar nuevo requerimiento</Button>
        </div>

      </Form>
    );
}
