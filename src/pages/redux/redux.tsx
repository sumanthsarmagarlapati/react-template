import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface User {
    name: string,
    age: number | null
}

const InitialState: User = {
    name: "Sumanth",
    age: 24
}

const userSlice = createSlice({
    name: "user",
    initialState: InitialState,
    reducers: {
        // createUserDetails:(state:Record<string,any>,action?:{payload:User})=>{
        //     return {...action?.payload}
        // },
        createUserDetails: (
            state: User,
            action: PayloadAction<User>
        ) => {
            return { ...state, ...action.payload };
        },
        updateUserDetails: (state: User, action: PayloadAction<Partial<User>>) => {
            return { ...state, ...action.payload }
        },
        resetUser: () => {
            return InitialState
        }
    }
})


export const { createUserDetails, updateUserDetails,resetUser } = userSlice.actions

export const selectedUserDetails = (state: RootState) => state.user;

export default userSlice.reducer;