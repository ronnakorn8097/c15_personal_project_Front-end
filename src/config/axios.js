import { getAccessToken, removeAccessToken } from "../../utils/local-storage";
import { BACKEND } from "./env";
import axios from 'axios';

axios.defaults.baseURL = BACKEND

// ก่อนจะส่งให้ backend ให้ แนบ headers.Authorization = Bearer xxxxxx ไปด้วย
axios.interceptors.request.use((config)=>{

    
    const token = getAccessToken();
    if(token)
    {
        // console.log(config)
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

axios.interceptors.response.use(
    (response)=>response,
    error =>{
        if(error.response.status === 401 )
        {
            // ลบ access token แล้ว ให้ไป page login
            removeAccessToken();
            window.location.href = '/login'
        }
    }
)

export default axios