import React from "react";
import BookItem from "./BookItem";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "./Chart";

const ViewBooks = (props) =>{

  let d = new Date();

  // const [filterYear, setFilterYear] = useState(d.getFullYear());

  const fxBook = (aBook)=>{
  
      return(
        <BookItem book = {aBook} key = {aBook.id}/>
      );
  
  }

  const filteredBookArray = [];

  for(let i =0 ; i < props.data.length; i++){
      filteredBookArray.push(props.data[i]);
  }
 
  return(
    <Container>
      <Row className="mb-3">
        {/* <Col xs= {10} md={10} lg={10}> <Chart yearlyData = {filteredExpenseArray} /></Col> */}
        {/* <Col> <ExpenseFilter filterYear={filterYear} updateFilterYear = {updateFilterYear} /> </Col> */}
      </Row>

      <Row>
        <Col> {filteredBookArray.map(fxBook)}</Col>
      </Row>
     
    </Container>
  );

};

export default ViewBooks;