
import Admin from "../../layouts/Admin";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";
import AddAdminModal from "components/Admins/AddAdminModal";
import AdminTable from "components/Admins/AdminTable";
import TableActionBar from "components/Admins/TableActionBar";
import AdminTablePagination from "components/Admins/AdminTablePagination";

const data = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@email.com',
        gender: 'male',
        active: '1 hr ago'
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
    {
        id: '3',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
    {
        id: '4',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
    {
        id: '5',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
    {
        id: '6',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
    {
        id: '7',
        name: 'Jane Doe',
        email: 'janedoe@email.com',
        gender: 'female',
        active: '1 hr ago'
    },
]


const Jobs = (props) => {

    console.log(props.posts)
    
    return (
        <>
            <SimpleHeader />
            { /* page contents */}
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <div>
                            <h1 style={{ display: 'inline-block' }} className="mr-1"> Admins </h1>
                            <AddAdminModal />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <TableActionBar />
                    </Col>

                    <Col lg="12" md="12" sm="12" xs="12">
                        <AdminTable data={data} />
                    </Col>
                    <Col lg="12" md="12" sm="12" xs="12" className="align-item-center">
                        <AdminTablePagination data={data} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export async function getStaticProps() {
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}


Jobs.layout = Admin;

export default Jobs; 