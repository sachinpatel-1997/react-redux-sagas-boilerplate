
import axios from 'axios'
import {
    getDatabaseRequest,
    getDatabaseSuccess,
    getDatabaseFailure,

    getDataRequest,
    getDataSuccess,
    getDataFaliure

} from '../actions/sqllab';

import {getFilteredData} from '../utils/helper'

export const getDatabase =  () => {
    return async(dispatch) => {
        try{
            dispatch(getDatabaseRequest())
            const result = await axios.get('http://localhost:3001/database')
            if([ 200,203 ].includes(result.status)){
                dispatch(getDatabaseSuccess(result.data));
            }
        }catch(error){
            dispatch(getDatabaseFailure(error))
        }
    }
}




export const getData =  (id, variable, value) => {
    return async(dispatch) => {
        try{
            dispatch(getDataRequest())
            const result = await axios.get(`http://localhost:3001/data?${variable}=${value}`)
            if([ 200,203 ].includes(result.status)){
                const response =result.data[id]
                if(variable && value){
                    const res = getFilteredData(response,variable,value)
                    dispatch(getDataSuccess(res));
                } else {
                    dispatch(getDataSuccess(response));
                }
            }
        }catch(error){
            dispatch(getDataFaliure(error))
        }
    }
}

