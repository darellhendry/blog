import React from 'react'
import './style.css'
import { Card } from 'react-bootstrap'

const Thumbnail = props => {
  return (
    <Card className="thumbnail-card">
      <Card.Body>
        <div className="container-title">
          <Card.Title>{props.title}</Card.Title>
          <p className='date'>{props.time}</p>
        </div>
        <Card.Text>{props.preview}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail