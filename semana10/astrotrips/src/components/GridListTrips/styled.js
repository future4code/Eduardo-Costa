import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';

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
`
export const WrapperBG = styled.div`
background-color: rgba(0, 0, 0, 0.3);
width: 100%;
height: 100%;
`