import React from 'react'
import {Row, Col, Form, Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {metodoGeneral} from '../lib/metodos.js' //mandar json al back

export default function Login() {
    const history = useHistory();

    // const logueoExitoso = 1;

    const login = async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value ;
        const contraseña = document.getElementById('login-contraseña').value ;
        const usuario = {
            email: email, 
            password: contraseña
        }

        const tkn = await metodoGeneral('https://c5042682eafe.ngrok.io/api/v1/users/login/','POST',usuario,true)
        console.log(tkn.token);
        localStorage.setItem('TIRS_token',tkn.token);
        
        if(tkn.token != null){
            history.push('/listaProyectos')
            window.location.reload();
        }
        else{
            document.getElementById('login-mensaje-error').textContent = 'Login no válido';
        }

      }
      


    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>

        <Container md="4">
          <Form onSubmit={login}>
            <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                  <h3 style={{textAlign: "center"}}>Ingresar a TIRS</h3>
  
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email" id='login-email'/>
                  </div>
  
                  <div className="form-group">
                      <label>Contraseña</label>
                      <input type="password" className="form-control" name="contraseña" id='login-contraseña'/>
                  </div>
                  <br></br>

                  <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                  <div style={{color: "#FF0000"}} id="login-mensaje-error"></div>
                  </Col>
            </Row>
          </Form>

        </Container>
      </>
    );
};
