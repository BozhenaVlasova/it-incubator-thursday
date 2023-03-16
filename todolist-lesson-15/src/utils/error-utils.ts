import { Dispatch } from 'redux'
import { ResponseType } from '../api/todolists-api'
import {AppActionsType, setErrorAC, setStatusAC} from "../app/app-reducer";

// generic function
export const handleServerNetworkError = (error:string , dispatch: ErrorUtilsDispatchType) => {
    dispatch(setErrorAC(error))
    dispatch(setStatusAC('failed'))
}
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<AppActionsType>
