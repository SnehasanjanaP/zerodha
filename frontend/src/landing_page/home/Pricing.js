import React from 'react';
function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-3 mt-3'>Unbeatable pricing</h2>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-3' >
                            <h2 className='fs-4' mb-3> <i class="fa fa-inr" aria-hidden="true"></i>0</h2>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div> 
                        <div className='col border p-3'>
                            <h2 className='fs-4' mb-3> <i class="fa fa-inr" aria-hidden="true"></i>20</h2>
                            <p>Intraday and F&O</p>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;