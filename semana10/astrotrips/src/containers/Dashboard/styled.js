import styled from "styled-components";
import {Paper, Button} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';


export const CardContent = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
align-content: center;
text-align: center;
`
export const PaperStyled = styled(Paper)`
margin: 10px;
padding: 10px;
`

export const AddButton = styled(Button)`
color: blue;
background-color: blue;
cursor: pointer;
`
export const AddIcon = styled(AddBoxIcon)`
color: blue;
cursor: pointer;
`