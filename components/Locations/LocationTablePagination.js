import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function locationTablePagination({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav aria-label="...">
                <Pagination
                    className="justify-content-center"
                    listClassName=" justify-content-center"
                >
                    <PaginationItem className=" disabled" >
                        <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabindex="-1"
                        >
                            <i className=" fa fa-angle-left"></i>
                            <span className=" sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <PaginationItem className=" active">
                                <PaginationLink href="#pablo" onClick={() => paginate(number)} >
                                    {number}
                                </PaginationLink>
                            </PaginationItem>
                            {/* <PaginationItem>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    {number}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    {number}
                                </PaginationLink>
                            </PaginationItem> */}
                        </li>
                    ))}
                    <PaginationItem >
                        <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabindex="-1"
                        >
                            <i className=" fa fa-angle-right"></i>
                            <span className=" sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </>
    );
}

export default locationTablePagination;


