import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardGroup from './CardGroup'
import Categories from './Categories'
import Pagination from './Pagination'

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const { categoryId } = useParams()

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        const getPosts = () => {
            if (categoryId){
                return axios.get(`https://simple-mongo-api.herokuapp.com/posts/?category=${categoryId}`)
            }else{
                return axios.get('https://simple-mongo-api.herokuapp.com/posts/')
            }  
        }

        const getCategories = () => axios.get('https://simple-mongo-api.herokuapp.com/categories/');

        axios.all([getPosts(),getCategories()])
        .then((response) => {
            setPosts(response[0].data)
            setCategories(response[1].data)
        }) 
    },[categoryId])

    return(
        <>
        {posts.length > 0 && categories.length > 0 ?
            <><Row>
                <Col md={8}>
                    <CardGroup posts={currentPosts}/>
                </Col>
                <Col md={4} className="d-sm-block d-none">
                    <Categories categories={categories} />
                </Col>
            </Row>
            <Row>
                <Col md={8} className="d-flex justify-content-center">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length} 
                        paginate={paginate} 
                        currentPage={currentPage} />
                </Col>
            </Row></> : 
            <Row>
            <Col md={12} className="d-flex justify-content-center">
                <Spinner animation="border" role="status" ></Spinner>
            </Col>
            </Row>
        }
        </>
    )
}

export default Posts
