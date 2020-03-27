import React, {Component} from "react";
import {connect} from "react-redux";
import {goBack} from "connected-react-router";
import GridListTrips from '../../components/GridListTrips/index'
import {getTrips} from "../../actions/trips";
import {WrapperDiv} from './styled'


class TripsChooser extends Component {

    componentWillMount() {
        this.props.getTrips()
    }
    render() {
        return (
            <WrapperDiv>
                {
                this.props.tripsList && this.props.tripsList.map((item) => (
                    <GridListTrips key={
                            item.id
                        }
                        id={
                            item.id
                        }
                        name={
                            item.name
                        }
                        description={
                            item.description
                        }
                        planet={
                            item.planet
                        }
                        durationInDays={
                            item.durationInDays
                        }
                        date={
                            item.date
                        }
                        img={'https://i.picsum.photos/id/1/500/500.jpg'}/>
                ))
            } </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({tripsList: state.trips.trips});

const mapDispatchToProps = dispatch => ({
    getTrips: () => dispatch(getTrips()),
    goBack: () => dispatch(goBack())

});

export default connect(mapStateToProps, mapDispatchToProps)(TripsChooser);
