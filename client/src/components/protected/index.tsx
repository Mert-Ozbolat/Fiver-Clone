import React from 'react'
import { useAuth } from '../../context/authContext'
import Loader from '../loader'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {

    const { user, isLoading } = useAuth()

    if (isLoading) return <Loader />

    if (!user?.isSeller) return <Navigate to='/' replace />


    return (
        <Outlet />
    )
}

export default Protected