import axios from "axios";
import {useEffect, useState} from "react";
import "../../styles/Login.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

import {loginUser} from "../../api/users/users";
import {deleteItem, getItem} from "../../lib/sessionStorage.js";
// import { getItem } from "../../lib/sessionStorage";
import {useUser} from "../../../context/userContext.jsx"

export const Login = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const {user, setUser} = useUser()

    const handleLogin = async (e) => {
        e.preventDefault();

        setIsLoading(true)
        await loginUser(formState.email, formState.password);
        setIsLoading(false)
    };

    const handleLogout = () => {
        deleteItem()
        setUser("")
    }

    useEffect(() => {
        if (user) {
            setIsLogin(true)
            console.log(user)
        }
    }, [])

    const loginForm = () => {
        return (
            <>
                <h1 className="style-title">Iniciar Sesión</h1>
                {
                    <Row className="w-100 ">
                        <Col xl={12} className="d-flex justify-content-center align-item-center">
                            <div className="d-grid">
                                <label>
                                    <b>Correo:</b>
                                </label>
                                <input
                                    className="input-form mb-4"
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            email: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder="Tu email"
                                />
                                <label>
                                    <b>Contraseña:</b>
                                </label>
                                <input
                                    className="input-form mb-4"
                                    value={formState.password}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            password: e.target.value,
                                        })
                                    }
                                    type="password"
                                    placeholder="Tu contraseña"
                                />

                                <div className="div-buttons">
                                    <button
                                        className="button-login-left button-login-animation mt-3 mb-3"
                                        onClick={handleLogin}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Enviando..." : "Login"}
                                    </button>

                                    <button className="button-login-right button-login-animation mt-3 mb-3">
                                        <Link className="link-register" to="/Register">
                                            Registrarse
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </>
        )
    }

    const logoutForm = () => {
        return (
            <>
                <div>
                    <h1>Log Out</h1>
                    <button onClick={handleLogout}>Log-out</button>
                </div>
            </>
        )
    }

    if(user) {
        return loginForm()
    } else {
        return logoutForm()
    }
};
