import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, authUser, logoutUser,addToCart,getCartItems,removeCartItem,payProducts } from './thunk.js'
import { toast } from "react-toastify"
const initialState = {
  userData: {
    id: '',
    email:'',
    name:'',
    role: 0, //관리자인지 유무
    image: '',
  },
  isAuth: false, //로그인 유무
  isLoading: false, //유저의 정보를 가지고오면 true, 다 가지고오면 false
  error:''
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //registerUser
      .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
          state.isLoading = false;
          toast.info('회원가입을 성공했습니다.');
      })
      .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //loginUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData = action.payload;
          state.isAuth = true;
          localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //authUser
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData = action.payload;
          state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.userData = initialState.userData;
          state.isAuth = false;
          localStorage.removeItem('accessToken');
      })
      //logoutUser
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData = initialState.userData;
          state.isAuth = false;
          localStorage.removeItem('accessToken');
      })
      .addCase(logoutUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //addCart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData.cart = action.payload;
          toast.info('장바구니에 추가되었습니다.');
      })
      .addCase(addToCart.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //getCartItems
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cartDetail = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //removeCartItem
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cartDetail = action.payload.productInfo;
          state.userData.cart = action.payload.cart;
          toast.info('상품이 장바구니에서 제거되었습니다.');
      })
      .addCase(removeCartItem.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
      //pay
      .addCase(payProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(payProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cartDetail = [];
          state.userData.cart = [];
          toast.info('성공적으로 상품을 구매했습니다.');
      })
      .addCase(payProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error(action.payload);
      })
  }
})

export default userSlice.reducer;