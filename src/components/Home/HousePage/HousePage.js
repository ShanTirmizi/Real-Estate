import React from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../../../data';

const HousePage = () => {
    let { id } = useParams();
    const product = data.products.find((x) => x._id === id)
    if(!product) {
        return  <div>product Not Found</div>
    }


    return (
        <div>
            <img src={product.image} />
        </div>
    )
}

export default HousePage
