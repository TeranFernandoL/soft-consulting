import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'

export default function FormModificarActor(){
    const {id, nombre, descripcion} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre: nombre,
        descripcion: descripcion
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
            const nuevoActor = {
              name: formValue.nombre ,
              descripcion: formValue.descripcion 
            }
            console.log(id);
            
            const res = await metodoGeneral(`/projects/actor/${id}`,'PATCH',nuevoActor);
            console.log(res);
            window.location.reload();
            
        }     
        setValidated(true)
    }; 

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={onChange} className="m-4">
        <Form.Group >
            <h3 style={{textAlign: "center"}}>Modificar actor: {nombre}</h3>
        </Form.Group>

        <br></br>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Nombre del actor:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="text" name="nombre" defaultValue={nombre} required />
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
        <br></br>

        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Modificar actor</Button>
        </div>

      </Form>
    );
}
