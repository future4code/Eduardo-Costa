import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {setUser, setLogout} from "../../actions/login";
import {routes} from '../../containers/Router/index'
import {Logo, OrganizeDiv, LogArea} from './styled'
import logoImage from '../../img/logo.PNG'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import {Avatar, Typography} from '@material-ui/core';


class ButtonAppBar extends Component {

    componentDidMount() {
        const existUser = JSON.parse(sessionStorage.getItem('user'))
        if (existUser !== null) {
            this.props.setUser(existUser)
        }
    }
    render() {
        const {goToDashboard, setLogout} = this.props;

        const logado = (
            <LogArea>
                <Avatar
                    src="https://picsum.photos/200"/>
                <Typography>{
                    this.props.user === null ? "" : this.props.user.email
                }</Typography>
                <button onClick={setLogout}>logout</button>
            </LogArea>
        )
        const deslogado = (
            <LogArea>
                <SupervisorAccountRoundedIcon color={'secondary'}
                    onClick={goToDashboard}
                    fontSize={'large'}/>
            </LogArea>
        )

        return (
            <OrganizeDiv>
                <Logo src={logoImage}/> {
                this.props.user === null ? deslogado : logado
            } </OrganizeDiv>
        );
    }
};

const mapStateToProps = state => ({user: state.login.user});

const mapDispatchToProps = dispatch => ({
    goToDashboard: () => dispatch(push(routes.adminDashboard)),
    setUser: (data) => dispatch(setUser(data)),
    setLogout: () => dispatch(setLogout()),


});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)

/* <CardMedia 
component="video"
src="https://www.spacex.com/sites/spacex/files/spx01_fairing-1080_v3.mp4"
title="Contemplative Reptile"
autoplay
/> */
