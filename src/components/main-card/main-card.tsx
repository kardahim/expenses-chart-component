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
                    <div className='main-card__summary__total__text'>
                        Total this month
                    </div>
                    <div className='main-card__summary__total__value'>
                        $478.33
                    </div>
                </div>
                <div className='main-card__summary__last-month'>
                    <div className='main-card__summary__last-month__percent'>
                        +2.4%
                    </div>
                    <div className='main-card__summary__last-month__text'>
                        from last month
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard