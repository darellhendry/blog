import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {Container} from 'react-bootstrap'
import Jumbotron from './components/Jumbotron/Jumbotron';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import './index.css'


const routes = [
  {path : '/', name: 'Home', Component: Home},
  {path : '/post/:id', name: 'Post', Component: Post},
]

function App() {
  return (
    <>
      <Router basename="/blog">
        <Jumbotron />
        <Container fluid className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {(props) => (
                <CSSTransition
                  in={props.match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component {...props}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </Router>
    </>
  );
}

export default App;
