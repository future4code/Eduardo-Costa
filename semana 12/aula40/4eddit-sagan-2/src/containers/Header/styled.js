import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';


export const WrapperDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
`
export const StyledAppBar = styled(AppBar)`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
margin-bottom: 20px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5px;
}
`
export const WrapperIcon = styled.div `
background-color: darkorange;
padding: 10px;
border-radius: 50%;
width: auto;
height: width;
margin: 20px;
@media (max-width: 768px) {
    margin: 10px;
}
`
export const WrapperDivLogo = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
cursor: pointer;
`
export const WrapperUserData = styled.div `
display: flex;
flex-direction: row;
align-items: center;
margin: 5px;
@media (max-width: 768px) {
    visibility: hidden;
    max-height: 0;
}
`
export const StyledTextField = styled(TextField)`
background-color: #f6f7f9;
align-self: center;
`
