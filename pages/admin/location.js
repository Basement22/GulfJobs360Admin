import {DOMAIN} from '../../Constants'
import Admin from "../../layouts/Admin";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";
import AddLocationModal from "components/Locations/AddLocationModal";
import LocationTable from "components/Locations/LocationTable";
import SearchTable from "components/Locations/SearchTable";
import LocationTablePagination from "components/Locations/LocationTablePagination";

const Location = (props) => {

    console.log(props.posts)

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.posts.success.slice(indexOfFirstPost, indexOfLastPost);

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
                            <AddLocationModal />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <SearchTable />
                    </Col>

                    <Col lg="12" md="12" sm="12" xs="12">
                        <LocationTable posts={currentPosts} />,
                    </Col>
                    <Col lg="12" md="12" sm="12" xs="12" className="align-item-center">
                        <LocationTablePagination postsPerPage={postsPerPage} totalPosts={props.posts.length} paginate={paginate} />
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
    const res = await fetch(`${DOMAIN}/locations`)
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