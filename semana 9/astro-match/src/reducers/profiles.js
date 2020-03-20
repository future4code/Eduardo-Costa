const initialState = {
    profiles: {
        profileToSwipe: undefined
    },
    matches: [],
    matchesCount: 0,
    selectedProfile: null

}

export const profiles = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...state,
                profiles: {
                    profileToSwipe: action.payload.profile
                }
            };
        case "SET_MATCHES":
            return {
                ...state,
                matches: action.payload.matches
            };
        case "UPDATE_COUNT_MATCHES":
            return {
                ...state,
                matchesCount: action.payload.count
            };
        case "UPDATE_SELECTED_PROFILE":

            return {
                ...state,
                selectedProfile: action.payload.i
            };
        default:
            return state;
    }
};
export default profiles
