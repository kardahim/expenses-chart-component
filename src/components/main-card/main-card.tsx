import React from 'react'
import './main-card.scss'

// import chart component
import BarChart from '../bar-chart/bar-chart'

function MainCard() {
    return (
        <div className='main-card'>
            <h1 className='main-card__header'>Spending - Last 7 days</h1>
            <BarChart />
            <div className='main-card__divider'></div>
            <div className='main-card__summary'>
                <div className='main-card__summary__total'>
                    <div className='main-card__summary__total__text'></div>
                    <div className='main-card__summary__total__value'></div>
                </div>
                <div className='main-card__summary__last-month'>
                    <div className='main-card__summary__last-month__percent'></div>
                    <div className='main-card__summary__last-month__text'></div>
                </div>
            </div>
        </div>
    )
}

export default MainCard