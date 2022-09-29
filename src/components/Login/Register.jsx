import axios from "axios";
import { useState } from "react";
import icongoogle from '../../asssets/icons/icongoogle.png';
import '../../styles/Login.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUser} from "../../api/users/users.js";

export const Register = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        name: '',
        role: 'USER_ROLE',
    });

    const handleRegister = async (e) => {
        e.preventDefault()

        const userNew = await createUser(formState.name, formState.email, formState.password);
        console.error(error)
            

    }

    return (

        <div className="container">
            <h1 className="style-title"><b>Registrate</b></h1>
            {
                <Row className="w-100">
                    <Col xl={12} className="d-flex justify-content-center align-item-center">
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
                                onClick={handleRegister}>Registrarse
                            </button>
                        </div>

                    </Col>
                </Row>
            }
        </div>
    );
}