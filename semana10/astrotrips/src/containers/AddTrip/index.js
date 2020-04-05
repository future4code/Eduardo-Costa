import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {addNewTrip} from "../../actions/trips";
import {TextFieldStyled, Wrapper, ButtonStyled, WrapperDiv} from './styled'
import {routes} from "../Router";
import {fieldsToAddTrip} from './fieldsToAddTrip'

class FormCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        };
    }
    componentDidMount() {
        const token = sessionStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    componentDidUpdate() {
        const token = sessionStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };

    handleSubmission = event => {
        event.preventDefault();
        this.props.addNewTrip(this.state.form)
    };
    render() {
        return (
            <WrapperDiv>
                <Wrapper>
                    <form onSubmit={
                        this.handleSubmission
                    }>
                        {
                        fieldsToAddTrip.map(field => {
                            return (
                                <div key={
                                    field.name
                                }>
                                    <TextFieldStyled id={
                                            field.name
                                        }
                                        label={
                                            field.label
                                        }
                                        name={
                                            field.name
                                        }
                                        type={
                                            field.type
                                        }
                                        onChange={
                                            this.handleInputChange
                                        }
                                        pattern={
                                            field.pattern
                                        }
                                        inputProps={
                                            {
                                                pattern: field.pattern,
                                                min: field.min,
                                                title: field.title
                                            }
                                        }
                                        min={
                                            field.min
                                        }
                                        required={
                                            field.required
                                        }
                                        title={
                                            field.title
                                        }
                                        value={
                                            this.state.form[field.name]
                                        }
                                        margin={'dense'}
                                        fullWidth
                                        multiline={
                                            field.multiline
                                        }
                                        rows={
                                            field.rows
                                        }/>
                                </div>
                            );
                        })
                    }
                        <ButtonStyled variant="contained"
                            color={'primary'}
                            type="submit">Enviar</ButtonStyled>
                    </form>
                </Wrapper>
            </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({idSelected: state.trips.selectedTrip});

const mapDispatchToProps = dispatch => ({
    addNewTrip: (form) => dispatch(addNewTrip(form)),
    goToLogin: () => dispatch(push(routes.adminIndex))
    


});

export default connect(mapStateToProps, mapDispatchToProps)(FormCandidate);
