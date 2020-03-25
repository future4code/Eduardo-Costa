import React, {Component} from "react";
import {connect} from "react-redux";
import {push, goBack} from "connected-react-router";
import {getTrips} from "../../actions/trips";


class TripsDetails extends Component {
    render() {
        const { goBack } = this.props;

        return (
            <div><button onClick={goBack}>voltar</button></div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack())

});

export default connect(mapStateToProps, mapDispatchToProps)(TripsDetails);
