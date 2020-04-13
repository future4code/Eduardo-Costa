const initialState = {
    tasks: [{}]
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TASK_LIST':
            return {
                ...state,
                tasks: action.payload.data
            }
        default:
            return state
    }
}

export default tasks
