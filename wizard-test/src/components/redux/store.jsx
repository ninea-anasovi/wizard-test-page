import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./reducers/CustomerReducer";

export default configureStore({
    reducer : {
        customer : CustomerReducer
        
    }
})