import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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

export const TextFieldStyled = styled(TextField)`
background-color: #f6f7f9;
display: flex;  
justify-content: center;
align-content: center;
align-items: center;
text-align: center;
align-self: center;
`
export const WrapperDiv = styled.div `
display: flex;
justify-content: center
`
