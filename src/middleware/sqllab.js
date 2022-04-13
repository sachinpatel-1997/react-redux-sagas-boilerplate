
import axios from 'axios'
import {
    getDatabaseRequest,
    getDatabaseSuccess,
    getDatabaseFailure,

    getDataRequest,
    getDataSuccess,
    getDataFaliure

} from '../actions/sqllab'

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




export const getData =  (id) => {
    return async(dispatch) => {
        try{
  
            dispatch(getDataRequest())
            const result = await axios.get('http://localhost:3001/data')
            if([ 200,203 ].includes(result.status)){
                const response =result.data[id]
                dispatch(getDataSuccess(response));
            }
        }catch(error){
            dispatch(getDataFaliure(error))
        }
    }
}

