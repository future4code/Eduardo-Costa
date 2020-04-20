import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import {getPosts, getPostDetail} from '../../actions/Actions'
import Post from '../Post/index'
import NewPost from '../../containers/NewPost/index'
import {WrapperDiv} from './styled'
import Loading from '../../components/Loading/index'

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
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

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.props.getPosts()
    }
    componentDidUpdate() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    handleWhitSelect = (event) => {
        this.setState({loading: true})
        this.props.getPostDetail(event)
        this.props.goToPostDetail()

    };
    render() {
        let newdata = [...this.props.posts]
        let searchResults = newdata.filter(post => post.title.toLowerCase().includes(this.props.searchTerms.toLowerCase()) || post.text.toLowerCase().includes(this.props.searchTerms.toLowerCase()))

        let postDataFull = (this.props.posts && this.props.posts.map((item) => (
            <Post key={
                    item.id
                }
                votesCount={
                    item.votesCount
                }
                userVoteDirection={
                    item.userVoteDirection
                }
                commentsNumber={
                    item.commentsNumber
                }
                id={
                    item.id
                }
                username={
                    item.username
                }
                text={
                    item.text
                }
                createdAt={
                    item.createdAt
                }
                title={
                    item.title
                }
                selectedId={
                    this.handleWhitSelect
                }/>
        )))
        let postDataSearch = (this.props.posts && searchResults.map((item) => (
            <Post key={
                    item.id
                }
                votesCount={
                    item.votesCount
                }
                userVoteDirection={
                    item.userVoteDirection
                }
                commentsNumber={
                    item.commentsNumber
                }
                id={
                    item.id
                }
                username={
                    item.username
                }
                text={
                    item.text
                }
                createdAt={
                    item.createdAt
                }
                title={
                    item.title
                }
                selectedId={
                    this.handleWhitSelect
                }/>
        )))

        return (
            <WrapperDiv> {
                < Loading
                open = {
                    this.state.loading
                }
                />
            }
                {
                < NewPost />
            }
                {
                this.props.searchTerms.length > 0 ? postDataSearch : postDataFull
            } </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    postComments: state.posts.postComments,
    user: state.posts.user,
    loading: state.posts.loading,
    searchTerms: state.posts.searchTerms
});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToPostDetail: () => dispatch(push(routes.postdetails)),
    getPosts: () => dispatch(getPosts()),
    getPostDetail: (id) => dispatch(getPostDetail(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
