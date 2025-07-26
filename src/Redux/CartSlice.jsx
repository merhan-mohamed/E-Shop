import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    totalPrice:0,
    totalQuantity:0

}

export const CartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers:{
        AddToCart(state, action){
            const newItem = action.payload
            const ItemIndex = state.products.find((item) => item.id === newItem.id)
            if(ItemIndex){
                ItemIndex.quantity++
                ItemIndex.price += newItem.price
            }else{
                state.products.push({
                    id: newItem.id,
                    name:newItem.name,
                    image: newItem.image,
                    quantity: 1,
                    price: newItem.price
                })

            }
            state.totalPrice += newItem.price
            state.totalQuantity ++


        },

        RemoveFromCart(state,action){
            const id = action.payload
            const ItemId = state.products.find((item) => item.id === id)
            if(ItemId){
                state.totalPrice -= ItemId.price
                state.totalQuantity -= ItemId.quantity
                state.products = state.products.filter((item) => item.id !== id)
            }

        },

        IncreaseQuantity(state, action){
            const id = action.payload
            const FindItem = state.products.find((item) => item.id === id)
            FindItem.quantity++;
            FindItem.totalPrice += FindItem.price;
            state.totalQuantity++;
            state.totalPrice +=FindItem.price
            
        },
        DecreaseQuantity(state, action){
            const id = action.payload
            const FindItem = state.products.find((item) => item.id === id)
            if(FindItem.quantity > 1 ){
            FindItem.quantity--;
            FindItem.totalPrice -= FindItem.price;
            state.totalQuantity--;
            state.totalPrice -=FindItem.price
            }
        }

    }

})

export const {AddToCart, RemoveFromCart, IncreaseQuantity, DecreaseQuantity} = CartSlice.actions
export default CartSlice.reducer