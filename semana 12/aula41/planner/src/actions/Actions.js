import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-eduardoteste2'

export const createNewTask = (nameData, dayData) => async (dispatch) => {
    try {
        console.log(nameData, dayData)
        const response = await axios.post(`${baseUrl}`, {
            text: nameData,
            day: dayData
        });
        dispatch(getTasks())
    } catch (error) {
    console.log(`erro: ${error}`)
    }
}

export const getTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}`);
        dispatch(setTasks(response.data))
    } catch (error) {
    console.log(`erro: ${error}`)
    }
}

const setTasks = (data) => ({type: 'SET_TASK_LIST', payload: {
    data
}})



