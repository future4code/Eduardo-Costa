import React, {Component} from "react";
import {
    StyledPaper,
    WrapperBottom,
    WrapperTop,
    StyledCommentIcon,
    WrapperContent,
    StyledAvatar
} from './styled'
import TopicVote from '../TopicVote'
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../Router/index";
import {calcHour, gna} from '../../services/util'

class Post extends Component {

    componentDidUpdate() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        calcHour(this.props.createdAt)
    }

    textComment = () => {
        let text = 'comentarios'
        if (this.props.commentsNumber === 1) {
            text = 'comentario'
        }
        return text
    }

    render() {
        const textData = (calcHour(this.props.createdAt))
        return (
            <StyledPaper>
                <TopicVote key={
                        this.props.id
                    }
                    userVoteDirection={
                        this.props.userVoteDirection
                    }
                    topicId={
                        this.props.id
                    }
                    votesCount={
                        this.props.votesCount
                    }/>
                <WrapperContent onClick={
                    () => {
                        this.props.selectedId(this.props.id)
                    }
                }>
                    <WrapperTop>
                        <StyledAvatar src={
                            `https://picsum.photos/1${
                                gna()
                            }${
                                gna()
                            }`
                        }/>
                        <Typography variant={'caption'}
                            color={'secondary'}>
                            <strong>r/categoria</strong>
                            Criado por:
                            <strong>u/{
                                this.props.username
                            }</strong>
                            a {textData}</Typography>
                    </WrapperTop>
                    <div>
                        <Typography variant={'h6'}
                            color={'textPrimary'}>
                            {
                            this.props.title
                        }</Typography>
                        <Typography variant={'subtitle1'}
                            color={'textPrimary'}>
                            {
                            this.props.text
                        }</Typography>
                    </div>
                    <WrapperBottom>
                        <StyledCommentIcon/>
                        <Typography variant={'caption'}
                            color={'secondary'}>
                            {
                            this.props.commentsNumber
                        }
                            {
                            this.textComment()
                        }</Typography>
                    </WrapperBottom>
                </WrapperContent>
            </StyledPaper>
        );
    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login))
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
