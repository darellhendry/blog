import React from 'react'
import './style.css'
import { Card } from 'react-bootstrap'

const Thumbnail = props => {
  return (
    <Card className="thumbnail-card" {...props}>
      <Card.Body>
        <div className="container-title">
          <Card.Title style={{ opacity: "87%", color: "#000" }}>
            {props.title}
          </Card.Title>
          <p className="date" style={{ opacity: "87%", color: "#000" }}>
            {props.time}
          </p>
        </div>
        <Card.Text style={{ opacity: "60%", color: "#000" }}>
          {props.preview}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail