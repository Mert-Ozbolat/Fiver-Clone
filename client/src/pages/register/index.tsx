import React, { FormEvent, useContext, useState } from 'react'
import Input from '../../components/input'
import Toggle from '../../components/input/toggle'
import { Link } from 'react-router-dom';
import { IFormUser } from '../../types';
import { AuthContext, useAuth } from '../../context/authContext';


const Register = () => {

    const [isSeller, setIsSeller] = useState<boolean>(false)
    const { register } = useAuth()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const newUser = Object.fromEntries(formData.entries());

        (newUser as unknown as IFormUser).isSeller = isSeller;

        register(newUser as unknown as IFormUser)
    }

    return (
        <div className='max-w-[900px] mx-auto'>
            <form onSubmit={handleSubmit} className='grid md:grid-cols-2 md:gap-10 md:pt-24'>
                <div>
                    <h1 className='text-xl md:text-2xl text-gray-500 font-bold mb-5'>Yeni Hesap Oluştur</h1>
                    <Input label='İsim' required={true} name='username' />
                    <Input label='Email' required={true} name='email' />
                    <Input label='Fotoğraf' required={true} name='photo' type='file' />
                    <Input label='Ülke' required={true} name='country' />
                    <Input label='Şifre' required={true} name='password' />
                </div>

                <div>
                    <h1 className='title'>Satıcı Olmak İstiyorum</h1>
                    <Toggle setIsSeller={setIsSeller} />
                    <Input
                        label='Telefon'
                        type='number'
                        name='phone'
                        disabled={!isSeller}
                        required={isSeller}
                    />
                    <Input
                        label='Açıklama'
                        type='textarea'
                        name='desc'
                        disabled={!isSeller}
                        required={isSeller}
                    />
                    <button className='form-button'>Kaydol</button>
                    <p className='mt-5 text-gray-500'>
                        Hesabınız var mı?
                        <Link className='ms-3 text-blue-500' to='/login'>Giriş Yap</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register