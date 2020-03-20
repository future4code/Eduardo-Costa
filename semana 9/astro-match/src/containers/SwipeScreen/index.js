import PropTypes from 'prop-types'
import React, {Component} from 'react'
import UserSwipeCard from '../../components/UserSwipeCard'
import {AppBar} from '../../components/AppBar'
import {ButtonsWrapper, ContentWrapper, SwipeScreenWrapper} from './styled'
import {connect} from 'react-redux'
import {swipeLeft, swipeRight} from '../../components/UserSwipeCard/styled'
import {updateCurrentPage} from '../../actions/route'
import {Loader} from '../../components/Loader'
import {getProfileToSwipe, chooseProfile, countMatches} from '../../actions/profiles'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { green } from '@material-ui/core/colors';

export class SwipeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
		}
	}

	componentDidMount() {
		if (!this.props.profileToSwipe && this.props.getProfileToSwipe) {
			this.props.getProfileToSwipe()
		}
		this.props.countMatches()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.profileToSwipe !== this.props.profileToSwipe) {
			this.setState({currentAnimation: null})
		}
	}

	onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? swipeRight : swipeLeft

		if (this.state.currentAnimation === null) {
			this.setState({currentAnimation: currentAnimation})
		}

		if (this.props.profileToSwipe) {
			this.props.chooseProfile(this.props.profileToSwipe.id, option === 'like')
			
		}
	}

	render() {
		const {profileToSwipe, goToMatchScreen} = this.props
		const {currentAnimation} = this.state

		return (
			<SwipeScreenWrapper>
				<AppBar
					rightAction={
					<IconButton color="inherit" onClick={this.props.goToMatchScreen}>
						<Badge badgeContent={this.props.matchesCount} color="secondary">
							{this.props.matchesCount >0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
						</Badge>
					</IconButton>}
				/>
				<ContentWrapper>
					{currentAnimation !== null && (<Loader/>)}
					{profileToSwipe ? <UserSwipeCard
					userToSwipe={profileToSwipe}
					animationDirection={currentAnimation}
					/> : (<Loader/>)}
					<ButtonsWrapper>
					<SentimentVeryDissatisfiedIcon style={{ cursor: "Pointer" }} color={'error'} fontSize={'large'} onClick={this.onChooseOption('dislike')} option="dislike"/>
					<SentimentVerySatisfiedIcon style={{ color: green[500], cursor: "Pointer" }} fontSize={'large'} onClick={this.onChooseOption('like')} option="like"/>
					</ButtonsWrapper>
				</ContentWrapper>
			</SwipeScreenWrapper>
		)
	}
}

SwipeScreen.propTypes = {
	goToMatchScreen: PropTypes.func.isRequired,
	chooseProfile: PropTypes.func.isRequired,
	getProfileToSwipe: PropTypes.func.isRequired,
	profileToSwipe: PropTypes.object,
}

const mapStateToProps = (state) => ({
	profileToSwipe: state.profiles.profiles.profileToSwipe,
	matchesCount: state.profiles.matchesCount
})

const mapDispatchToProps = (dispatch) => {
	return {
		goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
		getProfileToSwipe: () => dispatch(getProfileToSwipe()),
		chooseProfile: (id,choice) => dispatch(chooseProfile(id,choice)),
		countMatches: () => dispatch(countMatches()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen)
