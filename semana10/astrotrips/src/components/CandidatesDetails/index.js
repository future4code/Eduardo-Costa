import React, {Component} from "react";
import {connect} from "react-redux";
import {WrapperText, ReproveButton, ReproveIcon, WrapperOpt, ApproveButton, WrapperInfo, ApproveCheckBoxIcon} from './styled'
import {Avatar, Divider, Typography} from '@material-ui/core';



class CandidatesDetails extends Component {

    gna = () => {
        return (Math.floor(Math.random() * 9))
    }
    
    render() {
        return (
            <div key={
                    this.props.id
                }>
                <WrapperText elevation={2}>
                    <WrapperOpt>
                        <Avatar alt={this.props.name}
                            src={`https://picsum.photos/2${this.gna()}${this.gna()}`}
                            />
                            <ApproveButton variant={'contained'} size={'small'} color={'secondary'} onClick={() => {this.props.approve(this.props.tripId, this.props.id, true)}}> <ApproveCheckBoxIcon />Aprovar</ApproveButton>
                            <ReproveButton variant={'contained'} size={'small'} color={'secondary'} onClick={() => {this.props.approve(this.props.tripId, this.props.id, false)}}> <ReproveIcon />Reprovar</ReproveButton>
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
