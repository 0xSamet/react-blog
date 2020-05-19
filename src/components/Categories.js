import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const Categories = ({categories}) => {
    return (
         <ListGroup>
            {categories.map((category, index) => {
                return <NavLink to={`/posts/${category._id}`} key={index} exact activeStyle={{color: "#667292",fontWeight:500}} ><ListGroup.Item className='mb-1' >{category.name}</ListGroup.Item></NavLink>
            })}
            <NavLink to="/posts" key={Date.now()} exact activeStyle={{color: "#667292",fontWeight:500}} ><ListGroup.Item className='mb-1' >Tüm Yazılar</ListGroup.Item></NavLink>
        </ListGroup>
    )
}

export default Categories
