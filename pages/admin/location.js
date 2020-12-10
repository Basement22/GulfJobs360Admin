import Admin from "../../layouts/Admin";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";
import AddAdminModal from "components/Admins/AddAdminModal";
import JobsTable from "components/Jobs/JobsTable";
import TableActionBar from "components/Admins/TableActionBar";
import JobsTablePagination from "components/Jobs/JobsTablePagination";

const Location = (props) => {

    console.log(props.posts)

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <SimpleHeader />
            { /* page contents */}
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <div>
                            <h1 style={{ display: 'inline-block' }} className="mr-1"> Locations </h1>
                            <AddAdminModal />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <TableActionBar />
                    </Col>

                    <Col lg="12" md="12" sm="12" xs="12">
                        <JobsTable posts={currentPosts} />,
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

    // const [loading, setLoading] = React.useState(false);
    // setLoading(true);
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const posts = await res.json()
    // setLoading(false);

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

Location.layout = Admin;

export default Location; 