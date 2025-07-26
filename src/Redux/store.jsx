import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productslice.jsx" ;
import CartSlice from "./cartslice.jsx";

export const store = configureStore({
        reducer:{
            Products:ProductSlice,
            Cart: CartSlice
        }
})