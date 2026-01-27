import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getUserDetails } from "../Dashboard/dashboard.api.service";

interface User {
    name: string,
    age: number | null
}
const InitialState = {
    userDetails: null as User | null
}

const AsyncThunkRedux = createAsyncThunk("userAsync/loadUserAsyncDetails",async ()=>{
    const response =await getUserDetails()
    return response.data
})



const userAsyncSlice = createSlice({
    name: "userAsync",
    initialState: InitialState,
    reducers: {
        updatedUserAsyncDetails: (state: any, action: PayloadAction<Partial<User>>) => {
            state.userDetails = { ...state.userDetails, ...action.payload }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(AsyncThunkRedux.fulfilled,(state,action)=>{
            state.userDetails=action.payload
        })
    }
})