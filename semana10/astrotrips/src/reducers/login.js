const initialState = {
    user: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.userData
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default login
