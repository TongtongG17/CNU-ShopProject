import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Layout from './layout/Layout';
import { authUser } from './store/thunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Protected from './components/Protected';
import NotAuth from './components/NotAuth';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import CartPage from './pages/CartPage/CartPage';
import UploadPage from './pages/UploadProduct/UploadPage';
import DetailPage from './pages/DetailPage/DetailPage';


function App() {
  //로그인 유무 확인.
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>   

        <Route index element={<Landing/>}/>

        {/* 로그인한 유저만 갈 수 있음 */}
        <Route element={<Protected isAuth={isAuth}/>}>
          <Route path='/product/upload' element={<UploadPage/>}/>
          <Route path='/product/:productId' element={<DetailPage/>}/>
          <Route path='/user/cart' element={<CartPage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
        </Route>

        {/* 로그인한 유저는 갈 수 없음 */}
        <Route element={<NotAuth isAuth={isAuth}/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>

      </Route>
    </Routes>
  )
}

export default App
