import React from 'react'
import './style.css'
import { Card } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Thumbnail = props => {
  return (
    <Card className="thumbnail-card" {...props}>
      <Card.Body>
        <div className="container-title">
          <div>
            <Card.Title
              style={{ opacity: "87%", color: "#000", marginBottom: 0, fontWeight: 'bold' }}
            >
              {props.title}
            </Card.Title>
            <p
              className="date"
              style={{ opacity: "87%", color: "#000", marginBottom: 0 }}
            >
              {props.time}
            </p>
          </div>
          <FontAwesomeIcon icon={faAngleRight}/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail