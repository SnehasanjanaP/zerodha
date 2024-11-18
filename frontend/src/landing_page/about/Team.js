import React from 'react';
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-4 mb-5 mt-5 border-top'>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row text-muted fs-6' style={{lineHeight:"1.5"}}>
                <div className='col-5 text-center'>
                    <img src="/media/images/nithinKamath.jpg" alt="Nithin Kamath" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Nithin Kamath</h5>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-7'>
                    
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href=""style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                    

                </div>
            </div>
            <div className='row text-center mt-5 text-muted'>
                <div className='col-4'>
                    <img src="/media/images/nikhilKamath.jpg" alt="Nikhil Kamath" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Nikhil Kamath</h5>
                    <h6>Co-Founder & CFO</h6>
                </div>
                <div className='col-4'>
                    <img src="/media/images/kailashNadh.jpg" alt="Kailash Nadh" style={{borderRadius:"100%", width:"60%"}}/>  
                    <h5 className='mt-3'>Dr.Kailash Nadh</h5>
                    <h6>CTO</h6>
                </div>     
                <div className='col-4'>
                    <img src="/media/images/venuMadhav.jpg" alt="Venu Madhav" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Venu Madhav</h5>
                    <h6>COO</h6>
                </div>
            </div>
            <div className='row text-center mt-5 text-muted'>
                <div className='col-4'>
                    <img src="/media/images/hananDelvi.jpg" alt="Hanan Delvi" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Hanan Delvi</h5>
                    <h6>CCO</h6>
                </div>
                <div className='col-4'>
                    <img src="/media/images/seemaPatil.jpg" alt="Seema Patil" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Seema Patil</h5>
                    <h6>Director</h6>
                </div>     
                <div className='col-4'>
                    <img src="/media/images/karthikRangappa.jpg" alt="Karthik Rangappa" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Karthik Rangappa</h5>
                    <h6>Chief of Education</h6>
                </div>
            </div>
            <div className='row text-center mt-5 text-muted'>
                <div className='col-4'>
                    <img src="/media/images/austinPrakesh.jpg" alt="Austin Prakesh" style={{borderRadius:"100%", width:"60%"}}/>
                    <h5 className='mt-3'>Austin Prakesh</h5>
                    <h6>Director Strategy</h6>
                </div>
            </div>
        </div>
       
     );
}

export default Team;