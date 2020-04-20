import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';


export const TextFieldLogin = styled(TextField)`
width:30vw;
margin: 20px;
@media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    width: 80vw;
    height:10vh;
}
`
export const ButtonLogin = styled(Button)`
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 30px;
}
`
export const PaperLogin = styled(Paper)`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 40vw;
height: 80vh;
margin-left: 25vw;
padding:30px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2px;
    height: 95vh;
    width: 95%;
    margin-left: 10px;
}
`

export const TypographyLogin = styled(Typography)`
margin: o auto;
`
export const WrapperIcon = styled.div `
background-color: darkorange;
padding: 10px;
border-radius: 50%;
width: auto;
height: width;
margin: 20px;
`

export const WrapperDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
`

export const WrapperInputs = styled.div `
margin-bottom: 20px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2px;
    margin-left: 1px;
}
`
