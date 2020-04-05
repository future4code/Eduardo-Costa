import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {ContentWrapper, Text, MatchIcon} from './styled'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import UserSwipeCard from '../../components/UserSwipeCard'

class ProfileScreen extends React.Component {
    render() {
      const {goToSwipeScreen, matches} = this.props

        return (<div>
                <AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
            size={1}
            onClick={goToSwipeScreen}
					/>}
				/>
          <ContentWrapper>
            <UserSwipeCard
					userToSwipe={this.props.matches[this.props.selectedProfile]}
            />
            <Text>{this.props.matches[this.props.selectedProfile].bio}</Text>
          </ContentWrapper>
        </div>)
    }
} ProfileScreen.propTypes = {}

const mapStateToProps = (state) => ({
  matches: state.profiles.matches,
  selectedProfile: state.profiles.selectedProfile

})


const mapDispatchToProps = (dispatch) => {
	return {
		goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
