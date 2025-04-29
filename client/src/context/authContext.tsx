import { createContext, JSX, useState } from "react"
import { IFormUser, ILoginUser, IUser } from "../types"


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
    const [user, setUser] = useState<IUser | null>(null)

    const register = () => { }

    const login = () => { }

    const logout = () => { }


    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>
    )
}