import React, { FormEvent } from 'react'
import { categories, inputs } from '../../utils/constants'
import Input from '../../components/input'
import Select from '../../components/input/select'
import { useMutation } from '@tanstack/react-query'
import api from '../../api'

const Create = () => {

    useMutation({
        mutationFn: (data) => api.post('/gigs', data, { headers: { 'Content-Type': 'multipart/form-data' } })
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)



    }


    return (
        <div>
            <h1 className='font-bold text-3xl mb-5'>Yeni Hizmet Oluştur</h1>

            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
                    {
                        inputs.map((props, key) => (
                            <Input key={key} {...props} />
                        ))
                    }
                    <Select label='Kategori' options={categories} name='category' />
                </div>

                <div className='flex md:justify-center my-5'>
                    <button className='bg-green-500 px-6 py-2 rounded-md text-white hover:bg-green-600 max-md:w-full'>Oluştur</button>
                </div>

            </form>
        </div>
    )
}

export default Create