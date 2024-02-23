import React from "react";
import "./Home.css";
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import logo from "../../assets/img/brand/jetcoLogo.png";
import homeOne from "../../assets/img/icons/common/homeImage.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="home-div">
      <Row className="justify-content-center">
        <Col xl={4}>
          <div className="text-center">
            <img src={logo} className="mt-5 homeImage" alt="bank-logo" />
            <p className="login-text">Welcome back sign in to your account</p>
          </div>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83 login-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  autoComplete="new-email"
                  className="login-input"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative  custom-login-input" >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open login-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="password"
                  autoComplete="new-password"
                   
                />
              </InputGroup>
            </FormGroup>

            <div className="text-right">
              <a href="#" className="forgot-text">Forgot password?</a>
            </div>

            <div className="text-center">
              <Button
                className="btn  my-4 login-button pl-5 pr-5 w-md-auto "
                type="button"
                onClick={()=>navigate('/admin/dashboard')}
              >
                Sign In
              </Button>
              <p className="login-text">
                Don't have an account?{" "}
                <a className="signup-link" href="#">Sign Up</a>
              </p>
            </div>
          </Form>
        </Col>
        <Col xl={6} className="text-right">
          <img src={homeOne} alt="home-img" className="homeImage" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
