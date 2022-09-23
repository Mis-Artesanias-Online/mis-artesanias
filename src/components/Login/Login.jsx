import axios from "axios";
import { useState } from "react";
const API = 'https://super-cafe.herokuapp.com/api/auth/login';
import '../../styles/Login.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
/* import { GoogleLogin } from "react-google-login"; */
/* import * as dotenv from 'dotenv';
dotenv.config() */

export const Login = () => {
    const [formState, setFormState] = useState({

        email: '',
        password: '',
        name: '',
        role: 'USER_ROLE',
    });

    /* const resGoogle = (res) => {
        console.log(res);
        console.log(res.profileObj);
    } */

    async function postUser() {
        try {
            const response = await axios.post(API, formState);
            const sesion = window.localStorage.setItem
            console.log(response.data.token);
            console.log(sesion);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="container">
            <h1 className="style-title"><b>Iniciar Sesión</b></h1>
            {
                <Row className="w-100">
                    <Col xl={8}>
                        <div className="d-grid">
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

                            <div>
                                <button
                                    className="button-login button-login-animation mt-3 mb-3"
                                    onClick={postUser}>Iniciar Sesión

                                </button>

                                <Link to="/Register">
                                    <button
                                        className="button-login button-login-animation mt-3 mb-3"
                                    >Registrarse
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </Col>

                    {/* <Col xl={4}>
                        <h1 className="mb-4"><b>También con: </b></h1>
                        <GoogleLogin
                            clientId="g_id_onload"
                            data-client_id={process.env.GOOGLE_CLIENT_ID}
                            buttonText="Iniciar Sesión con Google"
                            onSuccess={resGoogle}
                            onFailure={resGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                    </Col> */}
                </Row>
            }
        </div>
    );
}