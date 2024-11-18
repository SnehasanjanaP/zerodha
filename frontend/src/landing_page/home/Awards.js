import React from 'react';

function Awards() {
    return (
       <div className='container mb-3'>
        <div className='row'>
          <div className='col-6 p-5'>
            <img src='media/images/largestBroker.svg'/>
          </div>
          <div className='col-6 p-5'>
            <h2>Largest stock broker in India</h2>
            <p className='mt-3 text-muted'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
            <div className='row mt-5'>
              <div className='col-6'>
                <ul>
                  <li className='pb-3 text-muted' >
                    Futures and Options
                  </li>
                  <li className='pb-3 text-muted'>
                    Commodity Derivatives
                  </li>
                  <li className='text-muted'>
                    Currency Derivatives
                  </li>
                </ul>
              </div>
              <div className='col-6'>
                <ul>
                  <li className='pb-3 text-muted'>
                    Stocks & IPOs
                  </li>
                  <li className='pb-3 text-muted'>
                    Direct mutual funds
                  </li>
                  <li className='text-muted'>
                    Bond Govt. Securities
                  </li>
                </ul>
              </div>

            </div>
            <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
          </div>
        </div>
      </div>
              
      );
}

export default Awards ;