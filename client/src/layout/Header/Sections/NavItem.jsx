import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../store/thunk';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const routes = [
  { to: '/login', name: '로그인', auth: false },
  { to: '/register', name: '회원가입', auth: false },
  { to: '', name: '로그아웃', auth: true },
  { to: '/product/upload', name: '업로드', auth: true },
  { to: '/user/cart', name: '카트', auth: true, icon: <AiOutlineShoppingCart style={{ fontSize: '1.4rem' }} /> },
  { to: '/history', name: '주문목록', auth: true },
]


function NavItem({mobile}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth =useSelector(state => state.user?.isAuth);
  const cart = useSelector(state => state.user?.userData?.cart);
  //로그아웃 함수
  const handleLogout = async () => {
    try{
      dispatch(logoutUser());
      navigate('/login');
    }catch(err){
      console.error(err);
    }
  };

  return (
    <ul className={`text-md justify-center w-full flex gap-4 ${mobile && "flex-col bg-sky-500/20 h-full py-3 backdrop-blur"} items-center`}>
      {routes.map(({to, name, auth, icon}) => {
        if (isAuth !== auth) return null;

        if(name ==='로그아웃') {
          return <li className='py-2 text-center border-b-4 border-teal-300 cursor-pointer hover:text-teal-500 duration-200'key={name}><Link onClick={handleLogout}>{name}</Link></li>
        }
        else if (icon) {
          return <li className='relative py-2 text-center border-b-4 border-teal-300 cursor-pointer hover:text-teal-500 duration-200' key={name}>
            <Link to={to} >
              {icon}
              <span className='absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -right-3'>
                {cart?.length}
              </span>
            </Link>
          </li>
        }
        else{
          return <li className='relative py-2 text-center border-b-4 border-teal-300 cursor-pointer hover:text-teal-500 duration-200' key={name}><Link to={to}>{name}</Link></li>
        }
      })}
    </ul>
  )
}

export default NavItem