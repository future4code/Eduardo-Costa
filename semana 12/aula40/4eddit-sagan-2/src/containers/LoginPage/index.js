import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from '../../actions/Actions';
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import {TextFieldLogin, PaperLogin, ButtonLogin, TypographyLogin, WrapperIcon, WrapperInputs} from './styled'
import RedditIcon from '@material-ui/icons/Reddit';
import Divider from '@material-ui/core/Divider'
import Loading from '../../components/Loading/index'


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false
        };
    }

    componentWillReceiveProps() {
        this.handleWhitLoading()
    }
    handleWhitLoading = () => {
        if (this.props.loading === 'desliga') {
            this.setState({loading: false})
        }
    };

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleLogin = (event) => {
        this.setState({loading: true})
        event.preventDefault();
        const {email, password} = this.state;
        this.props.login(email, password)
    }

    componentDidUpdate() {
        const token = localStorage.getItem("token")

        if (token !== null) {
            this.props.goToFeed();
        }
    }


    render() {
        const {email, password} = this.state
        return (
            <PaperLogin elevation={2}>
                {
                < Loading
                open = {
                    this.state.loading
                }
                />
            }
                <WrapperIcon>
                    <RedditIcon fontSize={'large'}/>
                </WrapperIcon>
                <TypographyLogin variant="h5" component="h3" color='primary'>Sign in</TypographyLogin>
                <WrapperInputs>
                    <form onSubmit={
                        this.handleLogin
                    }>
                        <TextFieldLogin variant="outlined" name='email' type='email' label='Digite seu email' required
                            value={email}
                            onChange={
                                this.handleInput
                            }/>
                        <TextFieldLogin variant="outlined" name='password' type='password' label='Digite sua senha' required
                            value={password}
                            onChange={
                                this.handleInput
                            }/>
                        <WrapperInputs>
                            <ButtonLogin type="submit" variant="contained" color='primary'>SIGN IN</ButtonLogin>
                        </WrapperInputs>
                    </form>
                    <Divider/>
                </WrapperInputs>
                <TypographyLogin variant="h5" component="h3" color='primary'>New to 4eddit ?</TypographyLogin>
                <ButtonLogin onClick={
                        this.props.goToRegister
                    }
                    variant="contained"
                    color='secondary'>SIGN UP</ButtonLogin>

            </PaperLogin>
        );
    }
}

const mapStateToProps = (state) => ({user: state.posts.user, loading: state.posts.loading})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password)),
    goToRegister: () => dispatch(push(routes.cadastro)),
    goToFeed: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
