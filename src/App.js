import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import PostReview from './components/PostReview'
import Posts from './components/Posts'

const App = () => {
   return (
      <Router >
         <NavBar/>
         <Container style={{marginTop:10}}>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/posts" component={Posts} />
               <Route exact path="/posts/:categoryId" component={Posts} />
               <Route exact path="/post/:postId" component={PostReview} />
               <Route exact path="/contact" component={Contact} />
            </Switch>
         </Container>
         <Footer/>
      </Router>
   )
}

export default App
