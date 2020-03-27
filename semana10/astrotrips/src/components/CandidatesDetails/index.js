import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {selectTrip} from "../../actions/trips";
import {routes} from "../../containers/Router";
import {WrapperText, WrapperOpt, ApproveButton, WrapperInfo, StyledTypographyY, StyledTypographyG, ApproveCheckBoxIcon, ReproveCheckBoxIcon, ReproveButton} from './styled'
import {Avatar, Divider, Typography} from '@material-ui/core';



class CandidatesDetails extends Component {

    render() {
        return (
            <div key={
                    this.props.id
                }>
                <WrapperText elevation={2}>
                    <WrapperOpt>
                        <Avatar alt={this.props.name}
                            src="https://picsum.photos/200"/>
                            <ApproveButton variant={'contained'} size={'small'} color={'secondary'} onClick={() => {this.props.approve(this.props.tripId, this.props.id, true)}}> <ApproveCheckBoxIcon />Aprovar</ApproveButton>
                            <ReproveButton variant={'contained'} size={'small'} color={'secondary'} onClick={() => {this.props.approve(this.props.tripId, this.props.id, false)}}> <ReproveCheckBoxIcon />Reprovar</ReproveButton>
                    </WrapperOpt>
                    <WrapperInfo>
                        <Typography color={'primary'} variant={'subtitle2'}>
                            Nome: <strong>{this.props.name}</strong>, <strong>{this.props.age}</strong> anos
                        </Typography>
                        <Typography color={'primary'} variant={'subtitle2'}>
                            Profissão: <strong>{this.props.profession}</strong>
                        </Typography>
                        <Typography color={'primary'} variant={'subtitle2'}>
                            País: <strong>{this.props.country}</strong>
                            <Divider />
                        </Typography>
                        <Typography color={'primary'} variant={'subtitle2'}>
                            Motivo declarado: <strong>{this.props.applicationText}</strong>
                        </Typography>
                    </WrapperInfo>
                </WrapperText>
            </div>
        )
    }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesDetails)
