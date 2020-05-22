import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SmallCard = (props) => {
  const { image, title, content, _id } = props.post

  return (
    <Card style={{ width: '100%', marginBottom: 10 }}>
       <Card.Img  variant="top" src={image} />
       <Card.Body>
       <Link to={`/post/${_id}`} ><Card.Title>{title}</Card.Title></Link>
        <Card.Text>{content}</Card.Text>
        <Link to={`/post/${_id}`} ><Button variant="primary">Devamını Oku</Button></Link>
       </Card.Body>
    </Card>
  )
}

export default SmallCard
