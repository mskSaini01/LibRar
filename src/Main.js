import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddBookForm from './components/AddBookForm';
import ViewBooks from './components/ViewBooks';
import {useState} from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

const Main = () => {

  const [allBooks, setAllBooks] = useState(
    [
      { id : 'e1', title : 'Jungle Book', amount : 1200, doi : new Date(2021, 3, 13) },
      { id : 'e2', title : 'Book 1', amount : 3100, doi : new Date(2021, 3, 7) },
      { id : 'e3', title : 'The Rings', amount : 30, doi : new Date(2021, 4, 23) },
      { id : 'e4', title : 'Jumaji', amount : 350, doi : new Date(2022, 5, 19) }

    ]);

  const submitHandler = (book) => {
    console.log('in App.js')
    console.log(book);

    setAllBooks([...allBooks, book]);
    
  }

  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="#home">LibRar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <AddBookForm onAdd = {submitHandler} />
              </Navbar.Text>
              </Navbar.Collapse>
    
              </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <ViewBooks data = {allBooks}/>
          </Col>
        </Row>
      </Container>
       
    </div>
  );
};
export default Main;
