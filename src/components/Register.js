import { useState, useEffect } from "react";
import { Form, Button, FormText, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        navigate("/Login");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Container">
      <h1 className="text-center mt-5">Register Page</h1>
      <div className="pageLogin d-flex justify-content-center">
        <Form onSubmit={register} className="formLogin text-start">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setRegisterEmail(e.target.value)} type="email" placeholder="Enter email" disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setRegisterPassword(e.target.value)} type="password" placeholder="Password" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <FormText className="ms-3">
            <Link to="/Login">Sudah Punya Akun ?</Link>
          </FormText>
        </Form>
      </div>
    </div>
  );
};

export default Register;
