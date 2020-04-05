import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/'
const idProfile = "EduCosta"

export const getTrips = () => async (dispatch, getState) => {
    const result = await axios.get(`${baseUrl}${idProfile}/trips`);

    console.log(result.data);

};