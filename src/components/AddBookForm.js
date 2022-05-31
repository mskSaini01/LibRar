import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const AddBookForm = (props) =>{

  const [formVisible, setFormVisible] = useState(false);

  const displayForm = () =>{
      setFormVisible(true);

  }

  const hideForm = () =>{
      setFormVisible(false);

  }

  const saveBook = (event) =>{
    event.preventDefault();
    console.log('save book called');
    console.log(event);

    let enteredTitle = event.target[1].value;
    let enteredAmount = event.target[2].value;
    let enteredDate = new Date(event.target[3].value);
  

    //  let enteredTitle = "Apple";
    //  let enteredAmount = 100;
    //  let enteredDate = new Date("2022-05-15");
  

    let book = {
      id : Math.random,
      title : enteredTitle,
      amount : enteredAmount,
      doi : enteredDate
    }

    props.onAdd(book);
    hideForm();
  }

  return (
    <>
      <Button variant="primary" onClick={displayForm}>
        Add Book
      </Button>
    
      <Modal show={formVisible}  onHide={hideForm} >
        <Form onSubmit={saveBook}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type = "text" placeholder="...Book Name" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" min = "1" placeholder="...Cost Price" />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label>Date Of Issue</Form.Label>
                  <Form.Control type="date"  min = "2020-01-01" max = "2022-12-31"/>
                </Form.Group>
              </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideForm}> Close </Button>
            <Button variant="primary" type= "submit" > Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  );
  
};

export default AddBookForm;