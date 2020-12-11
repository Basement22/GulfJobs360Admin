
import Admin from "../../layouts/Admin";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";
import AddAdminModal from "components/Admins/AddAdminModal";
import TipsCategoriesTable from "components/TipsCategories/TipsCategoriesTable";
import TableActionBar from "components/Admins/TableActionBar";
import TipsCategoriesTablePagination from "components/TipsCategories/TipsCategoriesTablePagination";

const CategoryTips = (props) => {

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
                            <h1 style={{ display: 'inline-block' }} className="mr-1"> Tips Categories </h1>
                            <AddAdminModal />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <TableActionBar />
                    </Col>

                    <Col lg="12" md="12" sm="12" xs="12">
                        <TipsCategoriesTable posts={props.posts.success} />
                    </Col>
                    <Col lg="12" md="12" sm="12" xs="12" className="align-item-center">
                        <TipsCategoriesTablePagination postsPerPage={postsPerPage} totalPosts={props.posts.length} paginate={paginate} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export async function getStaticProps() {
    // You can use any data fetching library
    const res = await fetch('http://www.gulfjob360.namistech.com/tips-category')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}


CategoryTips.layout = Admin;

export default CategoryTips; 