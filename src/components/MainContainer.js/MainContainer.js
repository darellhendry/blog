import React from 'react'
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap'
import Thumbnail from '../Thumbnail/Thumbnail';

const thumbnails = [
  {
    title: 'Proklamasi',
    preview: 'Pukul 00:42 web ini saya proklamasikan telah memposting postingan pertama saya.',
    time: new Date('2019-7-12T00:27:00')
  }
]
export default function MainContainer() {
  return (
    <Container>
      {thumbnails.map((item, index) => (
        <Row key={index} className="justify-content-center">
          <Col xs={12} md={9}>
            <Thumbnail title={item.title} preview={item.preview} time={item.time}/>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
