import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'
import {getMatches, onSelectProfile} from '../../actions/profiles'


class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}
setNewProfile = (i) => {
	this.props.onSelectProfile(i)
	this.props.goToProfileScreen()
}
	render() {
		const {goToSwipeScreen, matches} = this.props
		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches && matches.map((match) => (
						<ListItem key={match.name} onClick={() =>{this.setNewProfile(this.props.matches.indexOf(match))}}>
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matches

})

const mapDispatchToProps = (dispatch) => {
	return {
		getMatches: () => dispatch(getMatches()),
		onSelectProfile: (i) => dispatch(onSelectProfile(i)),
		goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
		goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen'))

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
