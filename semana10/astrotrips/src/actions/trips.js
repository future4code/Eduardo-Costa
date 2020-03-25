import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/'
const idProfile = "EduCosta"

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}${idProfile}/trips`);
    dispatch(setTrips(response.data.trips))
}
const setTrips = (trips) => ({type: 'SET_TRIPS', payload: {
        trips
    }})

export const getTripsDetails = (id) => async (dispatch) => {
    const response = await axios.get(`${baseUrl}${idProfile}/trip/${id}?=`);
    console.log("id: ", id)
    console.log("detalhes: ", response.data)
}

export const selectTrip = (trip) => ({type: 'SELECT_TRIP', payload: {
        trip
    }})

export const newApply = (id, form) => async (dispatch) => {
    const response = await axios.post(`${baseUrl}${idProfile}/trips/${id}/apply`, form, {
        headers: {
            "Content-Type": "application/json"
        }
    })
	console.log(response.data)
}
