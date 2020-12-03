import {
    Input,
    Row,
    Col,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    Pagination, PaginationItem, PaginationLink
} from "reactstrap"

const TableActionBar = () => {
    return (
        <Row className="my-2">
            <Col lg="8" md="8" sm="12" xs="12">
                <FormGroup>
                    <InputGroup className=" mb-3">
                        <Input
                            aria-describedby="button-addon2"
                            aria-label="Search"
                            placeholder="Search"
                            type="text"
                        ></Input>
                        <InputGroupAddon addonType="append" className="pr-1">
                            <Input type="select" style={{ borderRadius: 0 }}>
                                <option>id</option>
                                <option>name</option>
                                <option>email</option>
                            </Input>
                            <Button color="primary" id="button-addon2" type="button">
                                Search
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>

                </FormGroup>
            </Col>
            <Col lg="4" md="4" sm="4" xs="4">
                <Button color="danger" size="md">
                    <i className="far fa-trash-alt mr-1"></i>
                    delete
                </Button>
                <Button color="warning" size="md">
                    <i className="fas fa-pencil-alt mr-1"></i>
                    update
                </Button>
            </Col>
        </Row >
    )
}

export default TableActionBar; 