import React, { Component } from "react";
import { Alert, Container, Row, Col, CardGroup, Card, CardBlock, Form, Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { login } from '../../../auth/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }
  handleLogin(e) {
    e.preventDefault();
    console.log('handleLogin', this.state.userName, this.state.password);
    login(this.state.userName, this.state.password).then((resp) => {
      console.log('login', resp);
    }).catch((err) => {
      console.log('login_err', err);
      this.setState({
        alertMessage:err.message
      })
    })

  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <Form onSubmit={this.handleLogin.bind(this)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                        <Input type="text" placeholder="Username" onChange={e => this.setState({ userName: e.target.value })} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                        <Input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                      </InputGroup>
                      <Row>
                        {this.state.alertMessage ?
                          <Alert color="danger">{this.state.alertMessage}
                          </Alert> : ''}
                      </Row>
                      <Row>
                        <Col xs="6">
                          {/* onClick={this.handleLogin().bind(this)} */}
                          <Button type="submit" color="primary" className="px-4" >Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" onClick={() => { this.props.history.push('/register') }} active>Register Now!</Button>
                    </div>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
