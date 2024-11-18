import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <h1>Charges</h1>
                <p className='text-muted mt-3 fs-4'>List of all charges and taxes</p>
            </div> 
            <div className='row p-5 text-center'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h3 className='fs-4'>Free equity delivery</h3>
                    <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free -  ₹ 0 brokerage. </p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h3 className='fs-4'>Intraday and F&O trades</h3>
                    <p className='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h3 className='fs-4'>Free direct MF</h3>
                    <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
       </div>
     );
}

export default Hero;