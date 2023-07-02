import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../job/jobSlice';
import { logoutUser } from './userSlice';

export const registerUserThunk = async(url, user, thunkAPI) => {
    try {
        const response = await customFetch.post(url, user);
        return response.data;
    } catch (error) {
       return checkForUnauthorizedResponse(error, thunkAPI);
    }
}

export const loginUserThunk = async(url, user, thunkAPI) => {
    try {
        const response = await customFetch.post(url, user);
        return response.data;
    } catch (error) {
       return checkForUnauthorizedResponse(error, thunkAPI)
    }
}
export const updateUserThunk = async(url, user, thunkAPI) => {
    try {
        const result = await customFetch.patch(url, user)
        return  result.data;
    } catch (error) {
       return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const clearStoreThunk = async(message, thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllJobsState());
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject()
    }
}

