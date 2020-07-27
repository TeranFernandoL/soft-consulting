import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {getJsonStorage} from '../../lib/jsonStorages'
import {metodoGeneral} from '../../lib/metodos'



export default function FormNuevoProyecto() {
    const {id} = getJsonStorage('modalProps');
    const [validated, setValidated] = useState(false);
    const [formValue, setFormValue] = useState({
        id: id,
        email: "",
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
        const compartirProyecto = {
            project: formValue.id,
            email: formValue.email
        }


        const res = await metodoGeneral('/projects/invite','PUT',compartirProyecto)  //mandar objeto al back para el registro
        
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
            <h1>Compartir proyecto</h1>
        </Form.Group>
        <br></br>
        <br></br>

        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Correo del Colaborador:</Form.Label> 
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Control type="email" name="email" required />
          </Form.Group>
        </Form.Row>

        <br></br>

        <br></br>
        <div style={{textAlign: "center"}}>
         <Button style={{textAlign: "center"}} type="submit" variant="success">Compartir proyecto</Button>
        </div>
      </Form>
    );

}