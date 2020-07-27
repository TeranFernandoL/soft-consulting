import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'



export default function FormNuevoProyecto() {
    const {id} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        id: id,
        password: "",
    });
    
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
        const eliminarProyecto = {
            project: formValue.id,
            password: formValue.password
        }

        console.log(eliminarProyecto);
        
        const res = await metodoGeneral('/projects/out','PUT',eliminarProyecto)  //mandar objeto al back para el registro
        
        console.log(res);


        if(res == 0){
            console.log('no se pudo registrar');
            
        }
        else{
            window.location.reload();
        }
        
      }     
      setValidated(true)
      
    };
    

    return (
      <Form noValidate 
      validated={validated} onSubmit={handleSubmit} onChange={onChange} 
      className="m-4">
        <Form.Group className="text-center" >
            <h1>Eliminar proyecto</h1>
        </Form.Group>
        <br></br>
        <br></br>

        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Escriba su contraseña para confirmar:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="8">
            <Form.Control type="password" name="password" required />
          </Form.Group>
        </Form.Row>

        <br></br>

        <br></br>
        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Eliminar proyecto</Button>
        </div>
      </Form>
    );

}