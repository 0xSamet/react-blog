import React, { useEffect,useState } from 'react'
import { Row, Col, Card, Spinner } from 'react-bootstrap'

const PostReview = (props) => {
    const [post, setPost] = useState({})

    const postId = props.match.params.id

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${postId}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
           setPost(json)
        })
        .catch((err) => {
            console.log(err)
        })
    },[postId])

    return (
        <Row>
            <Col md={12} xs={12} sm={12} className="d-flex justify-content-center">
                { (Object.keys(post).length !== 0) ?
                    <Card style={{ width: '100%',marginTop:15 }}>
                        <Card.Img  variant="top" src={post.image} />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                        </Card.Body>
                        </Card> 
                        :   <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
            }

            </Col>
        </Row>
    )
}

export default PostReview
