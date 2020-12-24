
import Admin from "../../layouts/Admin";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";
import AddJobModal from "components/Jobs/AddJobModal";
import JobsTable from "components/Jobs/JobsTable";
import TableActionBar from "components/Jobs/TableActionBar";
import JobsTablePagination from "components/Jobs/JobsTablePagination";

const Jobs = (props) => {

    console.log(props.posts.success)

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.posts;

    // .slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber); 
    
    return (
        <>
            <SimpleHeader />
            { /* page contents */}
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <div>
                            <h1 style={{ display: 'inline-block' }} className="mr-1"> Jobs Categories </h1>
                            <AddJobModal />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <TableActionBar />
                    </Col>

                    <Col lg="12" md="12" sm="12" xs="12">
                        <JobsTable posts={props.posts.success} />
                    </Col>
                    <Col lg="12" md="12" sm="12" xs="12" className="align-item-center">
                        <JobsTablePagination postsPerPage={postsPerPage} totalPosts={props.posts.length} paginate={paginate} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export async function getStaticProps() {
    // You can use any data fetching library
    const res = await fetch('http://www.gulfjob360.namistech.com/api/jobcategory')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}


Jobs.layout = Admin;

export default Jobs; 