import axios from 'axios';
import { useRouter } from 'next/router'

import { DOMAIN } from "../../Constants"

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

    const router = useRouter()
    const [values, setValues] = React.useState({
        tipcategory_id: '',
        name: '',
        description: '',
        updated_by: '',
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async () => {

        const res = await axios.put(`${DOMAIN}/tips-categories`, values)

        console.log(res.data)
        router.push('/admin/categorytips')
        setModalFormOpen(false)
    }

    const [modalFormOpen, setModalFormOpen] = React.useState(false);

    return (
        <>
            <Button outline onClick={() => setModalFormOpen(true)} color="primary" size="sm" ><i class="fas fa-pencil-alt"></i></Button>
            {/* <EditButton /> */}
            <Modal size="lg" isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
                <div className=" modal-header">
                    <h4 className=" modal-title" id="modal-title-default">
                        Edit Tips
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
                            <Form role="form">
                            <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fab fa-buffer" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Tip Category Id"
                                            type="text"
                                            name='tipcategory_id'
                                            value={values.tipcategory_id}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fab fa-buffer" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Name"
                                            type="text"
                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-info-circle" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Description"
                                            type="text"
                                            name='description'
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-info-circle" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Updated By"
                                            type="text"
                                            name='updated_by'
                                            value={values.updated_by}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center" style={{ margin: '20px 0px' }} >

                                    <Button className="btn btn-primary btn-lg btn-block" color="primary" type="button"
                                        onClick={handleSubmit}
                                    >
                                        Update Tips
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
