import React, {useState} from 'react'
import {Row, Col, Form, Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import metodoGeneral from '../lib/metodos'

export default function Registro() {
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    const [formValue, setFormValue] = useState({
        dni: '',
        firstname: '',
        lastname: '',
        email: '',
        contraseña: '',
        cel: '',
        direccion: '',
        empresa: ''
    })

    const onChange = async e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })    
      }

    const registro = async (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            const username = {
                dni: formValue.dni,
                first_name: formValue.firstname,
                last_name: formValue.lastname,
                email: formValue.email,
                password: formValue.contraseña,
                phone: formValue.cel,
                adress: formValue.direccion,
                enterprise: formValue.empresa 
            }
            console.log(username);
            
            // const res = metodoGeneral('http://fd2802530c1a.ngrok.io/api/v1/users/login/','POST',username)  //mandar objeto al back para el registro
            // if(res == 0){
            //     console.log('no se pudo registrar');
                
            // }
            // else{
            //     console.log('registrado');
                
                // history.push('/listaProyectos')
                // window.location.reload();
            // }
        }
        setValidated(true)
      }

    return (
        <>
        <br></br>
        <Container md="4">
          <Form onSubmit={registro}
          noValidate validated={validated} 
          onChange={onChange} 
          >
            <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                  <h3 style={{textAlign: "center"}}>Registrarse a TIRS</h3>

                  <Form.Group>
                      <Form.Label>Dni</Form.Label> <Form.Control type="text" name="dni" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>First name</Form.Label> <Form.Control type="text" name="firstname" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Last name</Form.Label> <Form.Control type="text" name="lastname" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Email</Form.Label> <Form.Control type="email" name="email" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Contraseña</Form.Label> <Form.Control type="password" name="contraseña" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Telefono/Celular</Form.Label> <Form.Control type="text" name="cel" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Dirección</Form.Label> <Form.Control type="text" name="direccion" required/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Nombre de la empresa</Form.Label> <Form.Control type="text" name="empresa" required/>
                  </Form.Group>

                  <br></br>
                  <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                  <div style={{color: "#FF0000"}} id="registro-mensaje-error"></div>
                  </Col>
            </Row>
          </Form>
        </Container>
        <br></br>

      </>
    );
};

