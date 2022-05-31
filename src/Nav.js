import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Navbar, Row, Col} from "react-bootstrap";
import Main from "./Main.js";


const Nav = () => {
  const navStyle = {
    backgroundColor: "rgb(0,0,0,0.5)"
  };

  const booksfunc = () =>  {
    <Main/>
  }
 

  return (
   
          <Navbar fluid variant="dark" expand="lg" style={navStyle} >
            <Container>
            <Navbar.Brand href="#home">
              <h1 style={{ color: "#82cff1" }}>LibRar</h1>
              {/* <button onClick={booksfunc()}>admin</button> */}
            </Navbar.Brand>
            <Navbar.Toggle/>
            </Container>  
          </Navbar>
       
  );
};
export default Nav;
