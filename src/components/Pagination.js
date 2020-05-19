import React from 'react'
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        (pageNumbers.length > 0) ?
        <Pagination>
            <Pagination.First onClick={() => paginate(pageNumbers[0])} disabled={currentPage === pageNumbers[0]} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === pageNumbers[0]} />
            {
                pageNumbers.map(pageNumber => {
                    return  <Pagination.Item key={pageNumber} onClick={() => paginate(pageNumber)} active={currentPage === pageNumber} >{pageNumber}</Pagination.Item>
                })
            }
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.slice(-1)[0] } />
            <Pagination.Last onClick={() => paginate(pageNumbers.slice(-1)[0])} disabled={currentPage === pageNumbers.slice(-1)[0] } />
        </Pagination> : null
    )
}

export default MyPagination