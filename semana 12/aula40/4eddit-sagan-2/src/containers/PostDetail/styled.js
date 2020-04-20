import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import {Avatar} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

export const WrapperDiv = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
`
export const StyledPaper = styled(Paper)`
margin: 10px;
padding: 10px;
display: inline-flex;
min-width: 50%;
width: 50%;
@media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 95%;
    min-width: 95%;
}
`
export const WrapperTop = styled.div `
display: flex;
flex-direction: row;
margin-bottom: 10px;
`
export const WrapperBottom = styled.div `
display: flex;
flex-direction: row;
margin-top: 10px;
`
export const StyledAvatar = styled(Avatar)`
width: 20px;
height: 20px;
margin-right: 5px;
`
export const StyledCommentIcon = styled(CommentIcon)`
margin-right: 5px;
font-size: 15px;
`
export const WrapperContent = styled.div `
width: 100%;
`
