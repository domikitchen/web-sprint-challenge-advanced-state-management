import { FETCHING_SMURF, FETCHING_SMURFS_SUCCESS, ADD_SMURF } from '../actions/index';

const initalState = {
    loading: false,
    error: "",
    smurfs: []
}

export const reducer = (state = initalState, action) => {
    switch(action.type){
        case FETCHING_SMURF:
            return{
                ...state,
                loading: true
            }
        case FETCHING_SMURFS_SUCCESS:
            return{
                ...state,
                loading: false,
                smurfs: action.payload
            }
        case ADD_SMURF:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}