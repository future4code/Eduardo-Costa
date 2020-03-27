import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/'
const idProfile = "EduCosta7"

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}${idProfile}/trips`);
    dispatch(setTrips(response.data.trips))
    dispatch(refreshTripsDetails(response.data.trips))

}
const setTrips = (trips) => ({type: 'SET_TRIPS', payload: {
        trips
    }})

export const getTripsDetails = (id) => async (dispatch) => {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${baseUrl}${idProfile}/trip/${id}`, {
        headers: {
            auth: token
        }
    })
    console.log(response.data.trip)
    dispatch(setTripsDetails(response.data.trip))
}

const setTripsDetails = (trips) => ({type: 'SET_TRIPS_DETAILS', payload: {
    trips
}})

export const selectTrip = (trip) => ({type: 'SELECT_TRIP', payload: {
        trip
    }})

export const newApply = (id, form) => async (dispatch) => {
    const response = await axios.post(`${baseUrl}${idProfile}/trips/${id}/apply`, form, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export const deleteTrip = (id) => async (dispatch) => {
    const response = await axios.delete(`${baseUrl}${idProfile}/trips/${id}`)
    dispatch(getTrips())

}

export const decideCandidate = (tripId, candidateId, boolean) => async (dispatch) => {
    const token = sessionStorage.getItem("token");
    const body = {"approve":boolean}
    const response = await axios.put(`${baseUrl}${idProfile}/trips/${tripId}/candidates/${candidateId}/decide`,
    body,
        {headers: {auth: token}})
    console.log(response)
    dispatch(getTrips())

}

export const cleanTripsDetails = () => ({type: 'CLEAN_TRIPS_DETAILS', payload: {
}})

export const refreshTripsDetails = (trips) => async (dispatch) => {
    await dispatch(cleanTripsDetails())
    const token = sessionStorage.getItem("token");    
    trips.forEach(element => {
        dispatch(getTripsDetails(element.id))
    });



}