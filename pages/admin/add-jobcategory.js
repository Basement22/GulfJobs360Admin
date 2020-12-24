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

const AddJobCategory = () => {

    const router = useRouter()
    const [values, setValues] = React.useState({
        jobcategory: '',
        jobcategorydescription: ''
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        const body = JSON.stringify(values)

        const res = await fetch('http://www.gulfjob360.namistech.com/api/add-jobcategory' , {
          body ,
          method : 'POST',
          headers : { 
            'content-type' : 'application/json',
            // "Access-Control-Allow-Origin" : true 
          }

        })

        const data = await res.json();
        console.log(data)

        // const res = await axios.post(`http://www.gulfjob360.namistech.com/api/add-jobcategory`, values)

        // console.log(res.data)
        router.push('/admin/jobs')
    }

    return (
        <>
            <SimpleHeader />
            <div className=" modal-body p-0">
                <Card className=" bg-secondary shadow border-0">

                    <CardBody className=" px-lg-5 py-lg-5">
                        {/* <FormGroup>
                                <Label>
                                    Enter Job Category
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
                            <FormGroup>
                                <Label>
                                    Job Category Description
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
                            </FormGroup> */}
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fab fa-buffer" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Job Category"
                                        type="text"
                                        name='jobcategory'
                                        value={values.jobcategory}
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
                                        placeholder="Job Category Description"
                                        type="text"
                                        name='jobcategorydescription'
                                        value={values.jobcategorydescription}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            {/* <div className="custom-control custom-control-alternative custom-checkbox" >
                                    <input
                                        className="custom-control-input"
                                        id=" customCheckLogin"
                                        type="checkbox"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor=" customCheckLogin"
                                        style={{ float: 'left' }}
                                    >
                                        <span className="text-muted">Remember me</span>
                                    </label>
                                </div> */}
                            <div className="text-center" style={{ margin: '20px 0px' }} >

                                <Button className="btn btn-primary btn-lg btn-block" color="primary" type="button"
                                    onClick={handleSubmit}
                                >
                                    Add Job Category
                                    </Button>
                            </div>
                            {/* <Col xs="12" >
                                    <div className='text-center' >
                                        <a
                                            className="text-dark"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <small>Forgot password?</small>
                                        </a>
                                    </div>
                                </Col> */}
                        </Form>
                        {/* <Form role="form">
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
                            </Form> */}
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

// export async function getStaticProps() {
//     // You can use any data fetching library
//     const res = await fetch('http://www.gulfjob360.namistech.com/api/jobcategory')
//     const posts = await res.json()

//     return {
//         props: {
//             posts,
//         },
//     }
// }


AddJobCategory.layout = Admin;

export default AddJobCategory; 