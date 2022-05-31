import { Card } from "react-bootstrap";

const DateOfIssue = (props) =>{

  const day = props.doi.toLocaleString("en-IN", {day: "2-digit"})
  const month = props.doi.toLocaleString("en-IN", {month: "short"})
  const year = props.doi.toLocaleString("en-IN", {year: "numeric"})

  return(

    <Card border="info" style={{ width: '6rem' }}>
      <Card.Header>{month}</Card.Header>
      <Card.Body>
        <Card.Title>{day}</Card.Title>
        <Card.Text>{year}</Card.Text>
      </Card.Body>
    </Card>

  )

};

export default DateOfIssue;