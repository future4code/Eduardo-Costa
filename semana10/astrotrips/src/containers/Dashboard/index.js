import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import {CardContent, PaperStyled} from './styled';
import {getTrips, refreshTripsDetails, getTripsDetails, deleteTrip, decideCandidate, cleanTripsDetails} from "../../actions/trips";
import {Typography} from '@material-ui/core';
import TripDetails from '../../components/TripDetails/index'


class PublicIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.props.getTrips()
        // this.refreshTripDetails()
    }
    componentDidUpdate() {
        const token = sessionStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    // componentWillReceiveProps() {
    //     this.props.refreshTripsDetails(this.props.trips)
    // }

    // refreshTripDetails = () => {
    //     this.props.cleanTripsDetails()
    //     const valor = this.props.trips
    //     valor.forEach(element => {
    //         this.props.getTripsDetails(element.id)
    //     });
    //     };
        
    handleWhitSelect = (event) => {
        this.setState({selected: event})
    };

    render() {
        let selectioncandidates = {candidates: ""}
        selectioncandidates = this.props.tripsDetails.filter(item => 
            item.id == this.state.selected)
        const toselect = selectioncandidates.candidates
        return (
            <CardContent>
                <div>
                <PaperStyled color={'secondary'}>
                    <Typography variant={'subtitle1'} >Viagens cadastradas: <strong>{this.props.trips.length}</strong></Typography>
                                    {
                this.props.tripsDetails && this.props.tripsDetails.map((item) => (
                    <TripDetails 
                    key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        planet={item.planet}
                        durationInDays={item.durationInDays}
                        date={item.date}
                        approved={item.approved}
                        candidates={item.candidates}
                        botaoAdicionaC={this.handleWhitSelect}
                        />
                ))
            }
                </PaperStyled>
                </div>
                <div>
                <PaperStyled color={'secondary'}>
                    <Typography variant={'subtitle1'} >Candidatos: <strong></strong></Typography>
                {
                this.state.selected && selectioncandidates[0].candidates.map((item) => (
                    <p>{item.name}</p>
                ))
            }
                </PaperStyled>
                </div>
            </CardContent>
        );
    }
}

const mapStateToProps = state => ({user: state.login.user, trips: state.trips.trips, tripsDetails: state.trips.tripsDetails});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.adminIndex)),
    getTrips: () => dispatch(getTrips()),
    getTripsDetails: (id) => dispatch(getTripsDetails(id))


});

export default connect(mapStateToProps, mapDispatchToProps)(PublicIndexPage);

