const initialState = {
    trips: [],
    selectedTrip: ""
}

const trips = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.payload.trips
            }
        case 'SELECT_TRIP':
            return {
                ...state,
                selectedTrip: action.payload.trip
            }
        default:
            return state
    }
}

export default trips
