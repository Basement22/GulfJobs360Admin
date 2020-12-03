import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Label,
    Row,
    Col
} from "reactstrap";

const InputError = ({ text }) => {
    return <p style={{ color: "red" }}> {text} </p>
}

const AddAdminModal = (props) => {

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        role: '1'
    });

    const [modalFormOpen, setModalFormOpen] = React.useState(false);

    const generatePass = () => {
        let length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setValues({ ...values, password: retVal })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });
    }

    const handleSubmit = () => {
        console.log(values);
        setValues({
            email: '',
            password: '',
            role: ''
        })
    }

    return (
        <>
            <Button
                color="primary"
                onClick={() => setModalFormOpen(true)}
                type="button"
                size="sm"
                className="mt--2"
            >
                Add Admin
            </Button>
            <Modal size="lg" isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
                <div className=" modal-header">
                    <h4 className=" modal-title" id="modal-title-default">
                        Add New Admin
                    </h4>
                    <button
                        aria-label="Close"
                        className=" close"
                        onClick={() => setModalFormOpen(false)}
                        type="button"
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className=" modal-body p-0">
                    <Card className=" bg-secondary shadow border-0">

                        <CardBody className=" px-lg-5 py-lg-5">
                            <FormGroup>
                                <Label>
                                    Enter Admin's Email
                                </Label>

                                <InputGroup className=" input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className=" ni ni-lock-circle-open"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        name="email"
                                    ></Input>
                                </InputGroup>
                                <InputError text="error" />
                            </FormGroup>
                            <Form role="form">
                                <FormGroup className=" mb-3">
                                    <Label>
                                        Enter Admin's Password
                                    </Label>
                                    <Row>
                                        <Col lg="8">
                                            <InputGroup className=" input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className=" ni ni-email-83"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Password"
                                                    type="text"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    name="password"
                                                ></Input>
                                            </InputGroup>
                                        </Col>
                                        <Col lg="4">
                                            <Button block color="primary" onClick={generatePass}>
                                                Generate Password
                                            </Button>
                                        </Col>
                                    </Row>
                                    <InputError text="error" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="select-role">Select Admin's Role</Label>
                                    <Input type="select" name="role" id="select-role" onChange={handleChange}>
                                        <option value="1" name="1">1</option>
                                        <option value="2" name="2">2</option>
                                        <option value="3" name="3">3</option>
                                    </Input>
                                    <InputError text="error" />

                                </FormGroup>
                                <div className=" text-center">
                                    <Button block className=" my-4" color="primary" type="button" onClick={handleSubmit}>
                                        Send invite to Admin
                                        <i className="far fa-paper-plane ml-2" ></i>
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </Modal>
        </>
    )
};

export default AddAdminModal; 
