import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/index";

export default configureStore({
    reducer: appReducer,
})