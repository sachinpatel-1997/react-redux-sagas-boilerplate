import { ActionTypes } from './actionTypes'

export const getDatabaseRequest = () => {
    return {
        type: ActionTypes.GET_DATABASE_REQUEST,

    };
};
export const getDatabaseSuccess = (data) => {
    return {
        type: ActionTypes.GET_DATABASE_SUCCESS,
        payload: data,
    };
};
export const getDatabaseFailure = (error) => {
    return {
        type: ActionTypes.GET_DATABASE_FAILED,
        error: error,
    };
};


export const getDataRequest = () => {
    return {
        type: ActionTypes.GET_DATA_REQUEST,

    };
};
export const getDataSuccess = (data) => {
    return {
        type: ActionTypes.GET_DATA_SUCCESS,
        payload: data,
    };
};
export const getDataFaliure = (error) => {
    return {
        type: ActionTypes.GET_DATA_FAILED,
        error: error,
    };
};