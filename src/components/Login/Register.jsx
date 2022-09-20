import axios from "axios";
import { useState } from "react";
const API = 'https://super-cafe.herokuapp.com/api/users';
import icongoogle from '../../asssets/icons/icongoogle.png';
import '../../styles/Login.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Register = () => {
    const [formState, setFormState] = useState({

        email: '',
        password: '',
        name: '',
        role: 'USER_ROLE',
    });

    async function postUser() {
        try {
            const response = await axios.post(API, formState);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="container">
            <h1 className="style-title"><b>Registrate</b></h1>
            {
                <Row className="w-100">
                    <Col xl={8}>
                        <div className="d-grid">
                            <label><b>Nombre:</b></label>
                            <input
                                className="input-form mb-4"
                                value={formState.name}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        name: e.target.value
                                    })}
                                type='text'
                                placeholder='Tu nombre'
                            />
                            <label><b>Correo:</b></label>
                            <input
                                className="input-form mb-4"
                                value={formState.email}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        email: e.target.value
                                    })}
                                type='text'
                                placeholder='Tu email'
                            />
                            <label><b>Contraseña:</b></label>
                            <input
                                className="input-form mb-4"
                                value={formState.password}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        password: e.target.value
                                    })}
                                type='password'
                                placeholder='Tu contraseña'
                            />

                            <button
                                className="button-login button-login-animation mt-3 mb-3"
                                onClick={postUser}>Registrarse
                                
                            </button>
                        </div>

                    </Col>

                    <Col xl={4}>
                        <h1 className="mb-4"><b>También con: </b></h1>
                        <button className="loginButtonGoogle d-flex justify-content-center align-item-center">GOOGLE <img className="icon-google" src={icongoogle}/></button>

                    </Col>
                </Row>
            }
        </div>
    );
}