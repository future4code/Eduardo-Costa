import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';


export const PlannerWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
export const CreatorWrapper = styled.div`
padding: 20px;
`

export const TasksDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
justify-content: center;
height: 100%;
`
export const StyledTypography = styled(Typography)`
padding: 5px
`