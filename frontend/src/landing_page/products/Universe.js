import React from 'react';
function Universe() {
    return (  
        <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/zerodhaFundhouse.png" style={{maxWidth:"60%", height: "55px"}}/>
                <p className='text-small text-muted mt-3' style={{fontSize:"12.5px", fontWeight:"500"}}>Our asset management venture<br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/sensibullLogo.svg" style={{maxWidth:"60%", height: "55px"}}/>
                <p className='text-small text-muted mt-3'  style={{fontSize:"12.5px", fontWeight:"500"}}>Options trading platform that lets you<br/> create strategies, analyze positions, and examine<br/> data points like open interest, FII/DII, and more.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/tijoriLogo.svg " style={{maxWidth:"50%", height: "55px"}}/>
                <p className='text-small text-muted mt-3' style={{fontSize:"12.5px", fontWeight:"500"}}>Investment research platform<br/>that offers detailed insights on stocks,<br/> sectors, supply chains, and more.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/streakLogo.png" style={{maxWidth:"50%", height: "50px"}}/>
                <p className='text-small text-muted mt-3' style={{fontSize:"12.5px", fontWeight:"500"}}>Systematic trading platform<br/> that allows you to create and backtest<br/> strategies without coding.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/smallcaseLogo.png" style={{maxWidth:"60%", height: "55px"}} />
                <p className='text-small text-muted mt-3' style={{fontSize:"12.5px", fontWeight:"500"}}>Thematic investment platform<br/> that helps you invest in diversified<br/> baskets of stocks on ETFs.</p>
            </div>

            <div className='col-4 p-3 mt-5'>
                <img src= "media/images/dittoLogo.png" style={{maxWidth:"30%", height: "45px"}}/>
                <p className='text-small text-muted mt-3' style={{fontSize:"12.5px", fontWeight:"500"}}>Personalized advice on life<br/> and health insurance. No spam<br/> and no mis-selling.</p>
            </div>
            <button className='mt-3 p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto", backgroundColor:"#387ed1"}}>
                    Sign up for free
            </button>
        </div>
   </div>
);
}

export default Universe;