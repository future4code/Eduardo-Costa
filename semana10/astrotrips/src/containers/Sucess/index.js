import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import { routes } from "../Router";
import {WrapperCardTrips, ButtonStyled, TypographyStyled} from './styled'


class Sucess extends Component {

    render() {
        const {goToTripsList} = this.props;

        return (
            <WrapperCardTrips>
                <TypographyStyled variant={'h6'}>Parabéns!</TypographyStyled>
                <ButtonStyled variant="contained" onClick={goToTripsList}>Voltar para lista de viagens</ButtonStyled>
            </WrapperCardTrips>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToTripsList: () => dispatch(push(routes.tripList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sucess);
