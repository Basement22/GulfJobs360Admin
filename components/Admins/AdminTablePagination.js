import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function AdminTablePagination() {
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
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className=" active">
                        <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                            2 <span className=" sr-only">(current)</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i className=" fa fa-angle-right"></i>
                            <span className=" sr-only">Next</span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </nav>
        </>
    );
}

export default AdminTablePagination;