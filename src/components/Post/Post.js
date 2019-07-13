import React from 'react'
import { posts } from '../../text/text'
import {StyleSheet, css } from 'aphrodite'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import image from '../../assets/images/00.jpg'

export default class Post extends React.Component {
  handleClick = () => {
    
    this.setState(prev => {
      return { isIn: !prev.isIn };
    })
  }

  goToHome = () => {
    this.props.history.goBack()
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
        <Breadcrumb
          className={css(styles.breadcrumb)}
          bsPrefix="breadcrumb custom-bs"
        >
          <Breadcrumb.Item onClick={this.goToHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
        </Breadcrumb>
        <img className={css(styles.image)} src={image} alt="Proklamasi" />
        <Container>
          <Row>
            <Col>
              <div className={css(styles.titleContainer)}>
                <h5 style={{ fontWeight: "bold" }} className="h5">
                  {post.title}
                </h5>
                <em>{post.time}</em>
              </div>
              <div className="p">{post.content}</div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
    objectFit: "cover",
    marginBottom: 34,
    borderRadius: 8
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    paddingBottom: 24
  }
});