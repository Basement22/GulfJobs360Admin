import React from "react";
import Link from 'next/link';
import axios from 'axios';
import { DOMAIN } from "../../Constants"
import { useRouter } from 'next/router'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

function Login () {
  const router = useRouter()
  const [ values , setValues ] = React.useState({
    email : '',
    password : ''
  })



  const handleChange = (e) => { 
    const { name , value } = e.target 
    setValues({
        ...values ,
        [name] : value 
    })
  }

  const handleSubmit = async () => { 
    const body = JSON.stringify(values)

    const res = await fetch('http://www.gulfjob360.namistech.com/api/admin-login' , {
      body ,
      method : 'POST',
      headers : { 
        'content-type' : 'application/json',
        // "Access-Control-Allow-Origin" : true 
      }
  
    })

    const data = await res.json();

    // const res = await axios.post(`${DOMAIN}/api/admin-login` , values )

    // console.log( res.data )
    router.push('/admin/dashboard')
  }


    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <img
                  alt="Sorry!"
                  src={require("assets/img/brand/gulfblacklogo.png")}
                />
                <h3 className='text-dark mt-4' >Sign in</h3>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      name ='email'
                      autoComplete="new-email"
                      value = { values.email }
                      onChange = { handleChange }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name ='password'
                      autoComplete="new-password"
                      value = { values.password }
                      onChange = { handleChange }
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox" >
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
                </div>
                <div className="text-center" style={{ margin: '20px 0px' }} >
             
                    <Button className="btn btn-primary btn-lg btn-block" color="primary" type="button" 
                      onClick = { handleSubmit }
                    >
                      Sign in
                    </Button>
                </div>
                <Col xs="12" >
                  <div className='text-center' >
                    <a
                      className="text-dark"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                </Col>
              </Form>
            </CardBody>
          </Card>
          {/* <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col> */}
          {/* <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col> */}
          {/* </Row> */}
        </Col>
      </>
    );
}

Login.layout = Auth;

export default Login;
