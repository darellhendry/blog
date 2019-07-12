import React from 'react'
import { posts } from '../../text/text'
import {StyleSheet, css } from 'aphrodite'
import { CSSTransition, Transition } from 'react-transition-group'
import { Container } from 'react-bootstrap'
import './style.css'

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
      <Container>
        <div>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
  }
})