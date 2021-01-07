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

const Packages = () => {

    const router = useRouter()
    const [values, setValues] = React.useState({
        title: '',
        description: '',
        price: '',
        package_type: '',
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
        const res = await axios.post(`${DOMAIN}/packages`, values)

        console.log(res.data)
        router.push('/admin/packages')
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
                                        placeholder="Title"
                                        type="text"
                                        name='title'
                                        value={values.title}
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
                                        placeholder="Price"
                                        type="text"
                                        name='price'
                                        value={values.price}
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
                                        placeholder="Package Type"
                                        type="text"
                                        name='package_type'
                                        value={values.package_type}
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

Packages.layout = Admin;

export default Packages; 