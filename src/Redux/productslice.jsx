import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    SearchItem : " ",
    FilteredData:[]

}

export const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers:{
        setProducts(state, action) {
            state.products = action.payload
        },
        setSearchItem(state, action){
            state.SearchItem = action.payload
            state.FilteredData = state.products.filter((item) => item.name.toLowerCase().includes(state.SearchItem.toLowerCase()))
        }
    }
})

export const {setProducts, setSearchItem} = ProductSlice.actions;
export default ProductSlice.reducer