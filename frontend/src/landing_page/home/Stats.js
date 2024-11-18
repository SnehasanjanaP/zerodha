import React from 'react';
function Stats() {
    return (  
        <div className='container'>
            <div className='row ' >
                <div className='col-6'>
                    <h2 className='fs-2'>Trust with confidence</h2>
                    <div className='mt-5'>
                        <h4 className='fs-4'>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='fs-4'>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='fs-4'>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='fs-4'>Do better with money</h4>
                        <p className='text-muted mb-5'>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6'>
                        <img src='media/images/ecosystem.png' style={{width:"100%"}}/>
                        <div className='text-center'>
                            <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Stats;