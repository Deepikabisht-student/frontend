import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Ecommerce refers to when individuals or companies buy and sell goods or services online.
             Ecommerce can take place within a company's smartphone app, on a social media platform, or in an online marketplace.
              You can participate in ecommerce anywhere you can establish an internet connection.
             Common examples includes online shopping, electronic payments, online auctions, and internet banking.</p>
             <p>E-commerce typically uses the web for at least a part of a transaction's life cycle 
                although it may also use other technologies such as e-mail.
                 Typical e-commerce transactions include the purchase of products or services.
                 </p>
      </div>
    </div>
  )
}

export default DescriptionBox
