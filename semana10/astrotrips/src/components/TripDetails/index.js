import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {selectTrip} from "../../actions/trips";
import {routes} from "../../containers/Router";
import Typography from '@material-ui/core/Typography';
import {WrapperText, StyledDelDiv, StyledButtonDel, StyledTypographyY, StyledTypographyG} from './styled'
import {Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                    <div key={this.props.id} onClick={() => {this.props.setSelected(this.props.id)}}>
                    <WrapperText elevation={2}>
                    <Typography color={'primary'} variant={'subtitle1'}><strong>{this.props.name}</strong></Typography>
                    <Divider />
                    <Typography color={'primary'} variant={'subtitle1'}>{this.props.description}</Typography>
                    <Divider />
                    <Typography color={'primary'} variant={'subtitle2'}>
                        Planeta: {this.props.planet} - 
                        Duração: {this.props.durationInDays} dias - 
                        Partida: {this.props.date}
                    </Typography>
                    {this.props.approved.length === 0?
                    <StyledTypographyY variant={'subtitle1'}>Candidatos: <strong>{this.props.candidates.length}</strong> - aprovados: <strong>{this.props.approved.length}</strong></StyledTypographyY>
                    :
                    <StyledTypographyG variant={'subtitle1'}>Candidatos: <strong>{this.props.candidates.length}</strong> - aprovados: <strong>{this.props.approved.length}</strong></StyledTypographyG>
                    }
                    <StyledDelDiv><StyledButtonDel onClick={() => {this.props.deleteTrip(this.props.id)}}/></StyledDelDiv>
                    </WrapperText>
                    </div>
        )
    }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToCandidate: () => dispatch(push(routes.candidate)),
    selectTrip: (id) => dispatch(selectTrip(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)
