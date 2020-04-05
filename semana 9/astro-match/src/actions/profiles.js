import axios from 'axios'
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'
const idProfile = "eduardooo"

export const clearSwipes = () => async (dispatch) => {
    await axios.put(`${baseUrl}${idProfile}/clear`)
    dispatch(countMatches())
}

export const setProfile = profile => {
    return {type: "SET_PROFILE", payload: {
            profile
        }};
};

export const getProfileToSwipe = () => async (dispatch, getState) => {
    const result = await axios.get(`${baseUrl}${idProfile}/person`);

    dispatch(setProfile(undefined));
    dispatch(setProfile(result.data.profile));

};

export const chooseProfile = (id, choice) => async (dispatch, getState) => {
    const newChoice = {
        id,
        choice
    }
    const result = await axios.post(`${baseUrl}${idProfile}/choose-person`, newChoice)

    dispatch(countMatches())
};

export const setMatches = matches => {
    return {type: "SET_MATCHES", payload: {
		matches: matches
        }};
};

export const getMatches = () => async (dispatch, getState) => {
    const result = await axios.get(`${baseUrl}${idProfile}/matches`);

    dispatch(setMatches(result.data.matches));
};

export const updateCountMatches = count => {
    return {type: "UPDATE_COUNT_MATCHES", payload: {
            count
        }};
};

export const countMatches = () => async (dispatch, getState) => {
    const result = await axios.get(`${baseUrl}${idProfile}/matches`);

    dispatch(updateCountMatches(result.data.matches.length));
};

export const onSelectProfile = i => {
    return {type: "UPDATE_SELECTED_PROFILE", payload: {
            i
        }};
};

