import Admin from "../../layouts/Admin";

import {
    Container,
    Row,
    Col

} from 'reactstrap';

import SimpleHeader from "components/Headers/SimpleHeader.js";

const Stats = () => {
    return (
        <>
            <SimpleHeader />
            { /* page contents */}
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <h1>Statistics </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

Stats.layout = Admin;

export default Stats; 