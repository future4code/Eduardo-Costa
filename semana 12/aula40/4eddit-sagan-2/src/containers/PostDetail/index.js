import React, {Component} from "react";
import {connect} from "react-redux";
import Comments from '../../components/Comments/index'
import NewComment from "../NewComment/index"
import Post from '../Post/index'
import {WrapperDiv} from './styled'
import {push} from "connected-react-router";
import {routes} from "../Router/index";
import Loading from '../../components/Loading/index'


class PostDetail extends Component {
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

    textComment = () => {
        let text = 'comentarios'
        if (this.props.commentsNumber === 1) {
            text = 'comentario'
        }
        return text
    }

    gna = () => {
        return(Math.floor(Math.random() * 9))
    }

    componentDidUpdate() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    render() {
        const post = {
            ...this.props.postDetail
        }

        return (
            <WrapperDiv> {
                < Loading
                open = {
                    this.state.loading
                }
                />
            }
                <Post key={
                        post.id
                    }
                    votesCount={
                        post.votesCount
                    }
                    userVoteDirection={
                        post.userVoteDirection
                    }
                    commentsNumber={
                        post.commentsNumber
                    }
                    id={
                        post.id
                    }
                    username={
                        post.username
                    }
                    text={
                        post.text
                    }
                    createdAt={
                        post.createdAt
                    }
                    title={
                        post.title
                    }
                    selectedId={
                        () => {
                            console.log(post.id)
                        }
                    }/>
                <NewComment id={
                    post.id
                }/> {
                this.props.postDetail && this.props.postDetail.comments.map((item) => (
                    <Comments key={
                            item.id
                        }
                        votesCount={
                            item.votesCount
                        }
                        userVoteDirection={
                            item.userVoteDirection
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
                        topicId={
                            post.id
                        }/>
                ))
            } </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({postDetail: state.posts.postDetail, user: state.posts.user, loading: state.posts.loading});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
