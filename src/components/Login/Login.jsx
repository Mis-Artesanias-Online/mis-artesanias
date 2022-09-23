import axios from "axios";
import { useState } from "react";
import "../../styles/Login.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import { loginUser } from "../../api/users/users";
import { getItem } from "../../lib/sessionStorage";
/* import { GoogleLogin } from "react-google-login"; */

export const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  //   const resGoogle = (res) => {
  //     console.log(res);
  //     console.log(res.profileObj);
  //   };

  const handleLogin = async (e) => {
    e.preventDefault();

    loginUser(formState.email, formState.password);
    if (getItem("x-jwt")) {
      window.location.href = "/";
    }
  };

  return (
    <div className="container">
      <h1 className="style-title">"Login"</h1>
      {
        <Row className="w-100">
          <Col xl={8}>
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

              <div>
                <button
                  className="button-login button-login-animation mt-3 mb-3"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </button>

                <Link to="/Register">
                  <button className="button-login button-login-animation mt-3 mb-3">
                    Registrarse
                  </button>
                </Link>
              </div>
            </div>
          </Col>

          <Col xl={4}>
            <h1 className="mb-4">
              <b>También con: </b>
            </h1>
            {/* <GoogleLogin
                            clientId="g_id_onload"
                            data-client_id={process.env.GOOGLE_CLIENT_ID}
                            buttonText="Iniciar Sesión con Google"
                            onSuccess={resGoogle}
                            onFailure={resGoogle}
                            cookiePolicy={"single_host_origin"}
                        /> */}
          </Col>
        </Row>
      }
    </div>
  );
};
