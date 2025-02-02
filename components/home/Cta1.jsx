import React from 'react'

const Cta1 = () => {
  return (
    <section className="discount-desktop">
    <div className="container">
        <div className="discount-inner">                
            <div className="offer-action">
                <div className="offer-left">
                    <div className="tagline">GET DISCOUNT ON YOUR FIRST ORDER
                        <small>Scan the QR code with your mobile to unlock an exclusive offer!</small>

                    </div>
                    <a href="#" className="order-button">Place order now</a>
                    <a className="whatchat-btn" href="javascript:goTo('whatsapp');">Extra 10% OFF on whatsApp</a>
                </div>
                <div className="scaner-code"> <picture><img src="img/scaner-code.png" /></picture></div>
            </div>
            <div className="offer">
                <ul className="offer-main">
                    <li className="label">On WhatsApp Order</li>
                    <li className="offer-precentage">10% <span>off</span></li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cta1