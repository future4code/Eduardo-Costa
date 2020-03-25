import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {Card, Button} from '@material-ui/core';
import {CardContent} from './styled';
import {routes} from "../Router";
import {TypographyStyled} from './styled';


class PublicIndexPage extends Component {

    render() {
        const {goToTripsList} = this.props;
        return (
            <CardContent>
                <Card>
                    <CardContent>
                        <TypographyStyled align={'center'}
                            variant={'h6'}>Seja bem vindo ao FutureX, a agência de viagens do futuro.</TypographyStyled>
                        <TypographyStyled align={'justify'}
                            variant={'subtitle1'}>Você tem a difícil missão de escolher uma entre as mais incríveis viagens que o ser humano é capaz de realizar.
                        </TypographyStyled>
                        <TypographyStyled align={'justify'}
                            variant={'subtitle1'}>Depois de escolhida sua missão, seu perfil então será avaliado por nossa equipe. Se você preencher todos os requisitos obrigatórios, você será aprovado. Então, entramos em contato para programar a melhor experência da sua vida!</TypographyStyled>
                        <Button variant="contained" color="primary"
                            onClick={goToTripsList}>Ver todas as viagens disponíveis</Button>
                    </CardContent>
                </Card>
            </CardContent>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToTripsList: () => dispatch(push(routes.tripList))

});

export default connect(mapStateToProps, mapDispatchToProps)(PublicIndexPage);
