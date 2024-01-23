import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.PROD ?
    import.meta.env.VITE_SERVER_URL : 'http://localhost:8080' //백엔드 포트.
    //'http://localhost:8080' : import.meta.env.VITE_SERVER_URL //백엔드 포트.
})

//요청 보내기 전.
axiosInstance.interceptors.request.use(function (config) {
    //요청 헤더에 토큰도 같이 요청
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    return config;
}, function (error) {
    return Promise.reject(error);
})

//요청 보낸 후. 토큰 완료시 리로드.
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.data === 'jwt expired') {
        window.location.reload();
    }
    
    return Promise.reject(error);
})

export default axiosInstance;