import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api'
import Loader from '../../components/loader'
import Error from '../../components/error'
import GigInfo from './gig-info'
import BreadCrumb from './bread-crumb'
import UserInfo from './user-info'
import PackageInfo from './package-info'
import { categories } from './../../utils/constants';

const Detail = () => {

    const { id } = useParams()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gig'],
        queryFn: () => api.get(`/gigs/${id}`).then((res) => res.data.gig)
    })


    return (
        <div>
            {
                isLoading ? (
                    <Loader designs='my-20 size-8' />
                ) : error ? (
                    <Error info={error} refetch={refetch} />
                ) : (
                    <div>
                        <div>
                            <BreadCrumb category={data.category} />
                            <GigInfo gig={data} />
                            <UserInfo />
                        </div>
                        <PackageInfo gig={data} />
                    </div>
                )
            }
        </div>
    )
}

export default Detail