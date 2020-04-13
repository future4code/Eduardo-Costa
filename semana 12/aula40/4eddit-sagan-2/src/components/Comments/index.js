import React, {Component} from "react";
import CommentVote from '../../containers/CommentVote/index'
import {StyledPaper, WrapperTop, WrapperContent, WrapperVote} from './styled'
import Typography from '@material-ui/core/Typography';
import {calcHour} from '../../services/util'

class Comments extends Component {

    render() {
        const textData = (calcHour(this.props.createdAt))
        return (
            <StyledPaper>
                <WrapperVote>
                    <CommentVote commentId={
                            this.props.id
                        }
                        votesCount={
                            this.props.votesCount
                        }
                        userVoteDirection={
                            this.props.userVoteDirection
                        }
                        topicId={
                            this.props.topicId
                        }/>
                </WrapperVote>
                <WrapperContent>
                    <WrapperTop>
                        <Typography variant={'caption'}
                            color={'secondary'}>Comentado por
                            <strong> {
                                this.props.username
                            }</strong>
                            a {textData} </Typography>
                    </WrapperTop>
                    <div>
                        <Typography variant={'subtitle2'}
                            color={'textPrimary'}>
                            {
                            this.props.text
                        }</Typography>
                    </div>
                </WrapperContent>
            </StyledPaper>
        );
    }
}

export default Comments
