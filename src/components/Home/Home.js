import React from 'react'
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap'
import Thumbnail from '../Thumbnail/Thumbnail';
import {thumbnails} from '../../text/text'

class Home extends React.Component {
  goToPost = id => {
    this.props.history.push(`/post/${id}`)
  }

  render() {
    return (
      <Container>
        {thumbnails.map(item => (
          <Row key={item.id} className="justify-content-center">
            <Col xs={12} md={9}>
              <Thumbnail onClick={() => this.goToPost(item.id)} title={item.title} preview={item.preview} time={item.time}/>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default Home