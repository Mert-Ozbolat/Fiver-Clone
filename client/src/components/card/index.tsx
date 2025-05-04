import React from 'react'
import { IGig } from '../../types';
import { Link } from 'react-router-dom';


type Props = {
    item: IGig;
    expand?: boolean;
};

const Card = ({ item }: Props) => {
    return (
        <Link to={`/detail/${item._id}`}>



        </Link>

    )
}

export default Card