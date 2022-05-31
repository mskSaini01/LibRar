import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Form,Button,Navbar, Row, Col } from "react-bootstrap";

const Login = () => {

  const LogStyle = {
    backgroundColor: "rgb(0,0,0,0.4)",
    width: "30%",
    marginLeft: "32%",
    marginTop: "10%",
    padding: "2%",
    color: "white",
    borderRadius: "5%",
    
  };

  return (
      <Form style={LogStyle}>

        <Form.Label><h1>Login</h1></Form.Label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Your User ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Enter Your Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
};

export default Login;