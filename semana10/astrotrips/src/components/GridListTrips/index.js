import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {selectTrip} from "../../actions/trips";
import {routes} from "../../containers/Router";
import Typography from '@material-ui/core/Typography';
import {WrapperCardTrips,WrapperText, WrapperBG} from './styled'
import {Button, Divider} from '@material-ui/core';

class GridListTrips extends Component {

    handleWithChoose = (id) => {
        console.log(id)
        this.props.selectTrip(id)
        this.props.goToCandidate()
    }

    render() {
        return (
            <WrapperCardTrips img={this.props.img} elevation={5}>
                <WrapperBG>
                    <WrapperText elevation={10}>
                    <Typography color={'primary'} variant={'subtitle1'}><strong>{this.props.name}</strong></Typography>
                    <Divider />
                    <Typography color={'primary'} variant={'subtitle1'}>{this.props.description}</Typography>
                    <Divider />
                    <Typography color={'primary'} variant={'subtitle2'}>
                        Planeta: {this.props.planet} - 
                        Duração: {this.props.durationInDays} dias - 
                        Partida: {this.props.date}
                    </Typography>
                    <Button variant="contained" color="primary"
                        onClick={() => {this.handleWithChoose(this.props.id)}}
                        >Quero ir nessa!
                    </Button>
                    </WrapperText>
                </WrapperBG>
            </WrapperCardTrips>
        )
    }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToCandidate: () => dispatch(push(routes.candidate)),
    selectTrip: (id) => dispatch(selectTrip(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GridListTrips)
