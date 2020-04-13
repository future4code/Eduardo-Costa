import React, {Component} from "react"
import {connect} from "react-redux"
import {push} from "connected-react-router";
import {routes} from "../Router/index";
import {newComment} from "../../actions/Actions"
import {TextFieldStyled, StyledPaper} from './styled'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Loading from '../../components/Loading/index'


const formData = [{
        name: 'text',
        label: 'Novo comentário',
        type: 'text',
        multiline: true,
        rows: 3,
        title: 'Escreva um novo comentário'
    }]

class NewComment extends Component {
    constructor(props) {
        super(props)
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

    handleOnSubmit = event => {
        this.setState({loading: true})
        event.preventDefault();
        this.props.newComment(this.props.id, this.state.form);
        console.log("teste ")
    }

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
                        this.handleOnSubmit
                    }>
                        {
                        formData.map(field => {
                            return (
                                <TextFieldStyled variant="outlined"
                                    key={
                                        this.props.id
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
                                    value={
                                        this.state.form[field.name]
                                    }
                                    required={
                                        field.required
                                    }
                                    multiline={
                                        field.multiline
                                    }
                                    rows={
                                        field.rows
                                    }
                                    fullWidth
                                    onChange={
                                        this.handleInputChange
                                    }
                                    title={
                                        field.title
                                    }/>
                            )
                        })
                    }
                        <Button type="submit" variant="contained" color="primary">
                            Comentar
                        </Button>
                    </form>
                </FormControl>
            </StyledPaper>
        )
    }
}

const mapStateToProps = (state) => ({user: state.posts.user, loading: state.posts.loading})

const mapDispatchToProps = (dispatch) => ({
    goToFeed: () => dispatch(push(routes.root)),
    newComment: (id, form) => dispatch(newComment(id, form))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
