import styled from 'styled-components'
import {Paper, Button, Typography} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';



export const WrapperText = styled(Paper)`
background-color: rgba(255, 255, 255, 0.8);
color: white;
margin: 20px;
padding: 20px;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: left;
`
export const WrapperInfo = styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: left;
text-align: left;
`
export const StyledTypographyY = styled(Typography)`
background-color: rgba(255, 255, 0, 0.2);
`
export const StyledTypographyG = styled(Typography)`
background-color: rgba(0, 255, 0, 0.2);
`
export const WrapperOpt = styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
`

export const ApproveButton = styled(Button)`
color: green;
background-color: green;
cursor: pointer;
`
export const ApproveCheckBoxIcon = styled(CheckBoxIcon)`
color: green;
cursor: pointer;
`
export const ReproveButton = styled(Button)`
color: red;
background-color: red;
cursor: pointer;
`
export const ReproveCheckBoxIcon = styled(IndeterminateCheckBoxIcon)`
color: red;
cursor: pointer;
`