import React from 'react'
import { Row, Col } from 'react-bootstrap';
import SmallCard from './SmallCard'

const CardGroup = ({posts}) => {
    return (
        <Row>
            {posts.map((post) => {
                return (
                    <Col key={post._id} md={6} xs={12} sm={12} className="d-flex justify-content-center" >
                        <SmallCard post={post} />  
                    </Col>
                ) 
            })}
        </Row>
    )
}

export default CardGroup
