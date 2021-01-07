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
        name: '',
        description: ''
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

        const res = await axios.post(`${DOMAIN}/jobs`, values)

        console.log(res.data)
        router.push('/admin/alljobs')
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
                                        placeholder="TItle"
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
                                        placeholder="Job Location"
                                        type="text"
                                        name='job_location'
                                        value={values.job_location}
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
                                        placeholder="Currency"
                                        type="text"
                                        name='currency'
                                        value={values.currency}
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
                                        placeholder="Minimum Salary"
                                        type="text"
                                        name='min_salry'
                                        value={values.min_salry}
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
                                        placeholder="Maximum Salary"
                                        type="text"
                                        name='max_salary'
                                        value={values.max_salary}
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
                                        placeholder="Other Benifits"
                                        type="text"
                                        name='other_benifits'
                                        value={values.other_benifits}
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
                                        placeholder="Total Seats"
                                        type="text"
                                        name='total_seats'
                                        value={values.total_seats}
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
                                        placeholder="Industry Type"
                                        type="text"
                                        name='industry_type'
                                        value={values.industry_type}
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
                                        placeholder="Functional Area"
                                        type="text"
                                        name='functional_area'
                                        value={values.functional_area}
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
                                        placeholder="Gender"
                                        type="text"
                                        name='gender'
                                        value={values.gender}
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
                                        placeholder="Experience From"
                                        type="text"
                                        name='experince_from'
                                        value={values.experince_from}
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
                                        placeholder="Experience To"
                                        type="text"
                                        name='experince_to'
                                        value={values.experince_to}
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
                                        placeholder="Nationality"
                                        type="text"
                                        name='nationality'
                                        value={values.nationality}
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
                                        placeholder="Current Location"
                                        type="text"
                                        name='current_location'
                                        value={values.current_location}
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
                                        placeholder="Education"
                                        type="text"
                                        name='education'
                                        value={values.education}
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
                                        placeholder="Job FAQ"
                                        type="text"
                                        name='job_faq'
                                        value={values.job_faq}
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
                                        placeholder="Company Id"
                                        type="text"
                                        name='company_id'
                                        value={values.company_id}
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
                                    Add New Job
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

AddJobCategory.layout = Admin;

export default AddJobCategory; 