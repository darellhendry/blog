import React from 'react'
import { posts } from '../../text/text'
import {StyleSheet, css } from 'aphrodite'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import image from '../../assets/images/00.jpg'

export default class Post extends React.Component {
  handleClick = () => {
    
    this.setState(prev => {
      return { isIn: !prev.isIn };
    })
  }
  render() {
    let post = {title: '', content: ''}
    if (this.props.match !== null) {
      post = posts.find(item => {
        // eslint-disable-next-line eqeqeq
        return item.id == this.props.match.params.id
      })
    }
    
    return (
      <>
        <img className={css(styles.image)} src={image} alt='Proklamasi'/>
        <Container>
          <Row>
            <Col>
              <h5 className='h5'>{post.title}</h5>
              <p>{post.content}</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 450,
    objectFit: 'cover',
    marginBottom: 34
  }
})