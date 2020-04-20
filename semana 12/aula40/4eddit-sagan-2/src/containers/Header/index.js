import React, {Component} from "react";
import {WrapperDiv} from './styled'
import {connect} from "react-redux";
import {setLogout, setSearch, setUser} from '../../actions/Actions'
import {
    StyledAppBar,
    WrapperDivLogo,
    WrapperIcon,
    WrapperUserData,
    StyledTextField
} from './styled'
import RedditIcon from '@material-ui/icons/Reddit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                searchTerms: ""
            }
        }
    }

    componentDidMount() {
        const existUser = JSON.parse(localStorage.getItem('user'))
        if (existUser !== null) {
            this.props.setUser(existUser)
        }
    }

    handleInputChange = event => {
        const {value} = event.target;
        this.setState({
            form: {
                ...this.state.form,
                searchTerms: value
            }
        })
        this.props.setSearch(this.state.form.searchTerms)
    };

    render() {
        const userdata = (
            <WrapperUserData>
                <WrapperUserData>
                    <Button variant="outlined"
                        size={'small'}
                        color="primary"
                        onClick={
                            this.props.setLogout
                    }>Logout</Button>
                </WrapperUserData>
                <div>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>User: {
                        this.props.user === null ? "" : this.props.user.username
                    }</Typography>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>Email: {
                        this.props.user === null ? "" : this.props.user.email
                    }</Typography>
                </div>
            </WrapperUserData>
        )
        const logodata = (
            <WrapperDiv onClick={
                this.props.goToFeed
            }>
                <WrapperIcon>
                    <RedditIcon fontSize={'large'}/>
                </WrapperIcon>
                <WrapperDivLogo>
                    <Typography variant={'h5'}
                        color={'textPrimary'}>4eddit</Typography>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>Turma 2 - Sagan</Typography>
                </WrapperDivLogo>
            </WrapperDiv>
        )
        const searchdata = (
            <WrapperDiv>
                <StyledTextField placeholder="Search" variant="outlined"
                    value={
                        this.state.searchTerms
                    }
                    onChange={
                        this.handleInputChange
                    }
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            )
                        }
                    }/>
            </WrapperDiv>
        )
        return (
            <StyledAppBar position={'relative'}
                elevation={0}>
                {
                this.props.user.length === 0 ? "" : logodata
            }
                {
                this.props.user.length === 0 ? "" : searchdata
            }
                {
                this.props.user.length === 0 ? "" : userdata
            } </StyledAppBar>
        );
    }
}

const mapStateToProps = state => ({user: state.posts.user});


const mapDispatchToProps = (dispatch) => ({
    setLogout: () => dispatch(setLogout()),
    setUser: (data) => dispatch(setUser(data)),
    setSearch: (terms) => dispatch(setSearch(terms)),
    goToFeed: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
