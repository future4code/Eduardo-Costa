import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import {doLogin} from "../../actions/login";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginWrapper = styled.form `
width: 100%;
height: 100vh;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`;

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "bla@ble.com",
            password: "123456"
        };
    }
    componentDidUpdate() {
    const token = sessionStorage.getItem('token')
    if (token !== null) {
        this.props.goToDasboard()
    }
}
    handleFieldChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password} = this.state;

        return (
            <LoginWrapper>
                <TextField onChange={
                        this.handleFieldChange
                    }
                    name="email"
                    type="email"
                    label="E-mail"
                    value={email}/>
                <TextField onChange={
                        this.handleFieldChange
                    }
                    name="password"
                    type="password"
                    label="Password"
                    value={password}/>
                <Button onClick={
                    () => {
                        this.props.doLogin(this.state.email, this.state.password)
                    }
                }>Login</Button>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = state => ({user: state.login.user});

const mapDispatchToProps = dispatch => ({
  doLogin: (user, pass) => dispatch(doLogin(user, pass)),
    goToDasboard: () => dispatch(push(routes.adminDashboard))
  



});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
