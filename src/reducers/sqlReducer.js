import { ActionTypes } from '../actions/sqllab/actionTypes'
const initialState = {
    loading: false,
    database: {},
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.GET_DATABASE_REQUEST:
        return { ...state, loading: true};
    case ActionTypes.GET_DATABASE_SUCCESS:
        return { ...state,loading: false, database: action.payload};
    case ActionTypes.GET_DATABASE_FAILED:
        return { ...state, loading: false, };

    case ActionTypes.GET_DATA_REQUEST:
        return { ...state, loading: true};
    case ActionTypes.GET_DATA_SUCCESS:
        return { ...state,loading: false, data: action.payload};
    case ActionTypes.GET_DATA_FAILED:
        return { ...state, loading: false };
    
    default:
        return state;
    }
};