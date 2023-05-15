const { createSlice} = require("@reduxjs/toolkit")
// const initialState = [];

const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});
const productSlice = createSlice({
name:"product",
 initialState:{
data:[],
status:STATUSES.IDLE,

 },
 reducer:{
    setProducts(state, action) {
state.data = action.payload;
    },
    // remove(state, action) {
    //   return  state = state.filter((item) => item.id !== action.payload)
    // }
 }
});
export const{setProducts,setStatus}= productSlice.actions;
export default productSlice.reducer;
//Thunks
export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setProducts(STATUSES.LOADING));
        
        try{
    const res =await fetch ('https://fakestoreapi.com/products');
    const data = await res.json();
    dispatch(setProducts(data));
    dispatch(setStatus(STATUSES.IDLE));
        }catch(err){
            console.log(err);
dispatch(setStatus(STATUSES.IDLE))
        }
    }
}