import React from 'react'
import { inputs } from '../../utils/constants'
import Input from '../../components/input'

const Create = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl mb-5'>Yeni Hizmet Oluştur</h1>

            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
                    {
                        inputs.map((props, key) => (
                            <Input key={key} {...props} />
                        ))
                    }
                </div>

                <div>
                    <button className='bg-green-500 px-6 py-2 rounded-md text-white hover:bg-green-600 max-md:w-full'>Oluştur</button>
                </div>

            </form>
        </div>
    )
}

export default Create