import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getUserDetails } from "../Dashboard/dashboard.api.service";

interface User {
    name: string,
    age: number | null
}

const InitialState = {
    userDetails: {
        name: "",
        age: 24
    }
}

export const AsyncThunkRedux = createAsyncThunk("userAsync/loadUserAsyncDetails", async () => {
    try {
        const response = await getUserDetails()
        return response.data
    } catch {
        return null
    }
})


export const userAsyncSlice = createSlice({
    name: "userAsync",
    initialState: InitialState,
    reducers: {
        updatedUserAsyncDetails: (state: any, action: PayloadAction<Partial<User>>) => {
            state.userDetails = { ...state.userDetails, ...action.payload }
        },
        createdUserAsyncDetails: (state: any, action: PayloadAction<User>) => {
            state.userDetails = action.payload
        },
        resetAsyncUserDetails: (state, _) => {
            state.userDetails = InitialState.userDetails
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AsyncThunkRedux.pending, (state, _) => {
                state.userDetails = InitialState.userDetails
            })
            .addCase(AsyncThunkRedux.fulfilled, (state, action) => {
                state.userDetails.name = action.payload?.name ?? ""
                state.userDetails.age = action.payload?.age ?? 0
            })
            .addCase(AsyncThunkRedux.rejected, (_, action) => {
                console.error("Failed to load user details", action.error.message)
            })
    }
})


export const { updatedUserAsyncDetails, createdUserAsyncDetails, resetAsyncUserDetails } = userAsyncSlice.actions

export default userAsyncSlice.reducer;