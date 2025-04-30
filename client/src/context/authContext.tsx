import { createContext, JSX, useContext, useEffect, useState } from "react"
import { IFormUser, ILoginUser, IUser } from "../types"
import api from "../api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


type ContextType = {
    user: IUser | null
    register: (user: IFormUser) => void
    login: (user: ILoginUser) => void
    logout: () => void
}

export const AuthContext = createContext<ContextType>({
    user: null,
    register: () => { },
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        api
            .get('/auth/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((res) => setUser(res.data.user))
            .catch((err) => {
                localStorage.removeItem('token')
                toast.info('Oturumunuzun süresi doldu lütfen tekrardan giriş yapin')
            })
    }, [])



    const register = (user: IFormUser) => {
        api
            .post('/auth/register', user, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then((res) => {
                toast.info('Hesabınız oluşturuldu. Giriş yapabilirsiniz')
                navigate('/login')

            })
            .catch((err) =>
                toast.error(err.response?.data?.message))
    }

    const login = (user: ILoginUser) => {
        api
            .post('/auth/login', user)
            .then((res) => {
                setUser(res.data.user)
                localStorage.setItem('token', res.data.token)
                toast.success('Oturumunuz açildi')
                navigate('/')
            })
            .catch((err) => toast.error(err.response?.data?.message))
    }

    const logout = () => {
        api
            .post('/auth/logout')
            .then(() => {
                setUser(null)
                localStorage.removeItem('token')
                toast.info('Oturumunuz kapatildi')
            })
            .catch((err) => console.log(err))
    }


    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>
    )
}



export const useAuth = () => {
    return useContext(AuthContext)
} 