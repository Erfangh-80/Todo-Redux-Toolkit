import { configureStore } from "@reduxjs/toolkit"
import  usersReducer from "./Feature/User/userSlice"
const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store