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

const AddNewLocation = () => {

    const router = useRouter()
    const [values, setValues] = React.useState({
        location_name: '',
        code: '',
        slug: '',
        created_by: '',
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        // const body = JSON.stringify(values)

        // const res = await fetch('http://www.gulfjob360.namistech.com/api/add-jobcategory' , {
        //   body ,
        //   method : 'POST',
        //   headers : { 
        //     'content-type' : 'application/json',
        //     // "Access-Control-Allow-Origin" : true 
        //   }

        // })

        // const data = await res.json();
        // console.log(data)

        const res = await axios.post(`${DOMAIN}/locations`, values)

        console.log(res.data)
        router.push('/admin/location')
    }

    return (
        <>
            <SimpleHeader />
            <div className=" modal-body p-0">
                <Card className=" bg-secondary shadow border-0">
                    <CardBody className=" px-lg-5 py-lg-5">
                        <h1>Add New Location</h1>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fab fa-buffer" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Location Name"
                                        type="text"
                                        name='location_name'
                                        value={values.location_name}
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
                                        placeholder="Code"
                                        type="text"
                                        name='code'
                                        value={values.code}
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
                                        placeholder="Slug"
                                        type="text"
                                        name='slug'
                                        value={values.slug}
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
                                    Add New Location
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

AddNewLocation.layout = Admin;

export default AddNewLocation; 