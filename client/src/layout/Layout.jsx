import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Layout() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <ToastContainer position='bottom-right' theme='light' pauseOnHover autoClose={1500}/>
      <Header/>
      <main className='mb-auto w-10/12 max-w-2xl mx-auto'>
        <Outlet/>
        {/* 
          특정 페이지들 끼리 공통적으로 보여줘야 하는 레이아웃이 있을때 사용. 상위 컴포넌트를 레이아웃화 함.
          ex) 메인페이지에는 헤더 푸터가 보이고 마이페이지에서는 안보이게 하고싶음.
        */}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout