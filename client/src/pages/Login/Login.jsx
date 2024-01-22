import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import {useDispatch} from 'react-redux'
import {loginUser} from '../../store/thunk'

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' })

  const dispatch = useDispatch();

  const onSubmit = ({email,password}) => {
    const body = {
      email,
      password,
    }
    dispatch(loginUser(body));
    reset();
  }

  const userEmail = {
    required: "필수 항목 입니다."
  }

  const userPassword = {
    required: "필수 항목 입니다.",
    minLength:{
      value: 6,
      message: "최소 6자로 입력해주세요.",
    }
  }

  return (
    <section className='flex flex-col items-center justify-center mt-20 max-w-[400px] m-auto'>
      <div className='p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl text-center font-semibold'>로그인</h1>
        <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email'className='text-sm font-bold'>
              Email
            </label>
            <input type='text' id='email' className='rounded-md bg-white w-full border-gray-300 border mt-2 px-3 py-1 focus:border-blue-500 focus:outline-none focus:ring-0' {...register("email", userEmail)}/>
            {errors?.email && 
              <div>
                <span className='text-red-500 text-xs font-light'>{errors.email.message}</span>
              </div>
            }
          </div>

          <div>
            <label htmlFor='password'className='text-sm font-bold'>
              Password
            </label>
            <input type='password' id='password' className='rounded-md bg-white w-full border-gray-300 border mt-2 px-3 py-1  focus:border-blue-500 focus:outline-none focus:ring-0' {...register("password", userPassword)}/>
            {errors?.password && 
              <div>
                <span className='text-red-500 text-xs font-light'>{errors.password.message}</span>
              </div>
            }
          </div>
          <div className='mt-6'>
            <button type='submit' className='w-full font-medium text-white bg-gray-900 rounded-md px-1 py-2  hover:bg-sky-500 duration-200'>로그인</button>
          </div>
          <div className='mt-8 text-xs font-light text-center text-gray-700'>
            {" "}아직 회원이 아니신가요?{" "}
            <Link to='/register' className='font-bold hover:text-sky-500 hover:underline duration-75'>
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login