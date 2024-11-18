import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
          <div className='p-5' id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="" style={{color:"white"}}>Track Tickets</a>
          </div>
          <div className='row p-5'>
            <div className='col-6 p-3'>
              <h1 className='fs-4 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
              <input placeholder="Eg. how do I activate F&O, why is my order getting rejected"></input><br/>
              <div className='mt-3 supportLinks fs-6'>
                <a href="">Track account opening</a>
                <a href="" className='mx-3'>Track segment activation</a>
                <a href="" >Intraday margins</a>
                <a href="" className='mt-3'>Kite user manual</a>
              </div>
            </div>
            <div className='col-6 p-3'>
              <h1 className='fs-4'>Featured</h1>
              <ol>
                  <li className='mt-3'><a href="">Suspension of trading - IDFC Limited</a></li>
                  <li className='mt-3'><a href="">Rights Entitlements listing in October 2024</a></li>
              </ol>
            </div>        
          </div>
           
              
          
        </section>
      );
}

export default Hero;