import styled from 'styled-components'
import Icon from '@mdi/react'

export const ContentWrapper = styled.div`
	padding: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
`

export const SwipeScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`


export const MatchIcon = styled(Icon)`
	display: block;
	fill: #753192;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin: 10px;
`
