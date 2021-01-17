import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import FindHouses from './FindHouses/FindHouses';

const Banner = () => {
    const [showDates, setShowDates] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showDates && <FindHouses />}

                <Button onClick={() => setShowDates(!showDates)} className='banner__searchButton' variant='outlined'>
                    {showDates ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>
                    You can buy amazing houses here
                </h1>
                <h5>
                    Find you dream home here.
                    Find you dream home here.
                    Find you dream
                </h5>
                <Button variant='outline'>
                    Explore Houses
                </Button>
            </div>

        </div>
    )
}

export default Banner
