import React, {Component} from "react";
import {fieldsToForm} from './fieldsToForm'
import {TextFieldStyled} from './styled'
import {connect} from "react-redux";
import {newPost} from "../../actions/Actions";
import {StyledPaper} from './styled'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Loading from '../../components/Loading/index'

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            loading: false
        }
    }
    UNSAFE_componentWillReceiveProps() {
        this.handleWhitLoading()
    }
    handleWhitLoading = () => {
        if (this.props.loading === 'desliga') {
            this.setState({loading: false})
        }
    };

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
        this.setState({loading: true})
        event.preventDefault();
        this.props.newPost(this.state.form)
    };

    render() {
        return (
            <StyledPaper> {
                < Loading
                open = {
                    this.state.loading
                }
                />
            }
                <FormControl fullWidth>
                    <form onSubmit={
                        this.handleSubmission
                    }>
                        {
                        fieldsToForm.map(field => {
                            return (
                                <TextFieldStyled variant="outlined"
                                    key={
                                        field.name
                                    }
                                    id={
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
                            );
                        })
                    }
                        <Button type="submit" variant="contained" color="primary">
                            Enviar
                        </Button>
                    </form>
                </FormControl>
            </StyledPaper>
        );
    }
}


const mapStateToProps = state => ({loading: state.posts.loading});

const mapDispatchToProps = dispatch => ({
    newPost: (form) => dispatch(newPost(form))

});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
