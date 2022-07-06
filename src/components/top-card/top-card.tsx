import React from 'react'
import './top-card.scss'

// assets
import logo from '../../assets/logo.svg'

function TopCard() {
    return (
        <div className='top-card'>
            <div className='top-card__balance'>
                <div className='top-card__balance__title'>My balance</div>
                <div className='top-card__balance__value'>$921.48</div>
            </div>
            <div className='top-card__logo-container'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default TopCard