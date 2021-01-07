import axios from 'axios';
import { useRouter } from 'next/router'

import { DOMAIN } from "../../Constants"
import Admin from "../../layouts/Admin";
import SimpleHeader from "components/Headers/SimpleHeader.js";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    Button
} from 'reactstrap';

const InputError = ({ text }) => {
    return <p style={{ color: "red" }}> {text} </p>
}

const CreateTipsCategories = () => {

    const router = useRouter()
    const [values, setValues] = React.useState({
        name: '',
        description: '',
        created_by: ''
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        const res = await axios.post(`${DOMAIN}/tips-categories`, values)

        console.log(res.data)
        router.push('/admin/categorytips')
    }

    return (
        <>
            <SimpleHeader />
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
                                        placeholder="Created By"
                                        type="text"
                                        name='created_by'
                                        value={values.created_by}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center" style={{ margin: '20px 0px' }} >
                                <Button className="btn btn-primary btn-lg btn-block" color="primary" type="button"
                                    onClick={handleSubmit}
                                >
                                    Add Tips Category
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

CreateTipsCategories.layout = Admin;

export default CreateTipsCategories; 