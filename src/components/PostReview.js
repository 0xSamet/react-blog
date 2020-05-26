import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Posts from './Posts'


const PostReview = (props) => {
    const [post, setPost] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { postId } = useParams()

    useEffect(() => {
        axios.get(`https://simple-mongo-api.herokuapp.com/posts/${postId}`)
        .then((response) => {
            setPost(response.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    },[postId])

    return (
        <Row>
            <Col md={12} xs={12} sm={12} className="d-flex justify-content-center mb-2">
                { isLoading ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                : 
                <Card style={{ width: '100%',marginTop:15 }}>
                    <Card.Img  variant="top" src={post.image} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>   
                }
            </Col>
        </Row>
    )
}

export default PostReview
