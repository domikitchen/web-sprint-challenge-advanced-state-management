import axios from 'axios';

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAIL = "FETCHING_SMURFS_FAIL";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: FETCHING_SMURF })
        axios.get(`http://localhost:3333/smurfs`)
            .then(response => {
                dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data })
            })
    }
}

export const ndSmurf = smurf => {
    return dispatch => {
        console.log(smurf)
        dispatch({ type: FETCHING_SMURF })
        axios.post(`http://localhost:3333/smurfs`, smurf);
        dispatch({ type: ADD_SMURF })
    }
}