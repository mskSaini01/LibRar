import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import DateOfIssue from "./DateOfIssue.js";

const BookItem = (props) =>{

  return(
    <Card className="text-center mb-3">
        <Card.Body>
          <Card.Text>
            <Row>
              {/* <Col><DateOfIssue doi = {props.book.date} /></Col> */}
              <Col xs={6} md={6} lg={6}> {props.book.title}</Col>
              <Col><Badge bg="info">₹ {props.book.amount}</Badge></Col>
            </Row>
        
          </Card.Text>
      </Card.Body>
    </Card>
  );

};

export default BookItem;