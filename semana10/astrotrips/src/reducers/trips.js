const initialState = {
    trips: [],
    tripsDetails: [],
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
        case 'SET_TRIPS_DETAILS':
            const tripsDetailsCopy = [...state.tripsDetails]
            tripsDetailsCopy.push(action.payload.trips)
            return {
                ...state,
                tripsDetails: tripsDetailsCopy
            }
        case 'CLEAN_TRIPS_DETAILS':
            return {
                ...state,
                tripsDetails: []
            }
        default:
            return state
    }
}

export default trips

