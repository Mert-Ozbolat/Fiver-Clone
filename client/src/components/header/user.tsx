import React from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../types'


type Props = {
    data: IUser
}


const User = ({ data }: Props) => {

    return (
        <>
            <img src={data.photo} alt="" className='size-[40px] rounded-full object-cover' />
            <span>{data.username}</span>

            <div className='w-[150px] text-[13px] flex-col absolute top-[40px] left-0 transition duration-500 bg-gray-200 rounded-md hidden group-hover:flex text-center'>
                <Link to='/my-gigs' className='px-5 py-2 hover:bg-gray-100'>
                    Hizmetler
                </Link>
                <Link to='/add-gig' className='px-5 py-2 hover:bg-gray-100'>
                    Hizmet Ekle
                </Link>
                <Link to='/' className='px-5 py-2 hover:bg-gray-100'>
                    Siparişler
                </Link>
                <Link to='/my-gigs' className='px-5 py-2 hover:bg-gray-100'>
                    Mesajlar
                </Link>

                <button
                    onClick={() => alert('Çıkış yapılıyor')}
                    className='px-5 py-2 hover:bg-gray-100'>
                    Çıkış yap
                </button>
            </div>

        </>
    )
}

export default User