import { Form, Button, FormText, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // login with email dan password

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login with google
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="Container">
      <div className="Container d-inline-block text-center ">
        <h1 className="text-center mt-5">Login Page</h1>
        <div className="pageLogin d-flex-justify-content-center p-2 border">
          <Form onSubmit={login} className="formLogin text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" disabled />
              <Alert variant="danger">Login email dan password masih dalam perbaikan mohon login dengan akun google</Alert>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <FormText className="ms-3">
              Belum Punya akun?<Link to="/Register">Buat Akun</Link>
            </FormText>
          </Form>
        </div>
        <div className="button2 mt-2 text-center">
          <Button onClick={signInWithGoogle} className="bg-danger">
            <FontAwesomeIcon className="me-2" icon={faGoogle} />
            Sign in with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
