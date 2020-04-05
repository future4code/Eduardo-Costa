import styled from 'styled-components'
import {Paper, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export const WrapperCardTrips = styled(Paper)`
background-image: url(${props => props.img});
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const WrapperText = styled(Paper)`
background-color: rgba(255, 255, 255, 0.8);
color: white;
margin: 20px;
padding: 20px;
border-radius: 5px;
cursor: pointer;

`
export const WrapperBG = styled.div`
background-color: rgba(0, 0, 0, 0.3);
width: 100%;
height: 100%;
`
export const StyledTypographyY = styled(Typography)`
background-color: rgba(255, 255, 0, 0.2);
`
export const StyledTypographyG = styled(Typography)`
background-color: rgba(0, 255, 0, 0.2);
`
export const StyledButtonDel = styled(DeleteIcon)`
color: red;
cursor: crosshair;
`
export const StyledDelDiv = styled.div`
display: flex;
justify-content: flex-end;
`