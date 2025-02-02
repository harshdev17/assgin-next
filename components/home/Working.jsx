import React from 'react'

const Working = () => {
  return (
    <section className="process">
    <div className="container">
    <div className="title">
            <h2>How Our Assignment Help Services Work?</h2>                
        </div>
      
        <ul>
        <div className="row">
          
            <div className="col-md-3">
                <li>
                  <span><i className="far fa-file-alt"></i></span>  
                   <div className="tagline">Fill in Your Requirements</div>
                  <p>Fill out assignment requirements or additional details to get customised solutions.</p>
               </li>
            </div>
            <div className="col-md-3">
                <li>
               <span><i className="far fa-dollar-sign"></i></span>
                <div className="tagline">Get the price</div>
                <p>Click on the place order icon to confirm and move forward with the next remaining steps.</p>
            </li>
            </div>
            <div className="col-md-3">
                <li>
                <span><i className="fas fa-file-invoice-dollar"></i></span>
                <div className="tagline">Make a Secure Payment</div>
                <p>Make a hassle-free payment using your suitable option via credit, or debit card.</p>
            </li>
            </div>
            <div className="col-md-3">
                <li>
                <span><i className="fas fa-clipboard-check"></i></span>
                <div className="tagline">Receive Your Assignment</div>
                <p>Check your inbox for your delivered assignment. Download, review and submit it.</p>
            </li>
            </div>
           
        </div>
            
            
            
            
        </ul>
    </div>

    <a className="conversion-btn" href="#">Submit Your Assignment Query</a>

</section>
  )
}

export default Working