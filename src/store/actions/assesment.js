import * as actionTypes from '../actionTypes';



export const getAssesment = (id) => async (dispatch) => {
     try {
         
        dispatch({
            type: actionTypes.GET_ASSESMENT,
            
        })

     } catch (error) {
         console.log(error)
     }
}

