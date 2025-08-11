
// const Features = () => {
//     return (
//     <div className="features">

//     </div>

//     )
// }
// src/components/Features.js
import React from 'react'
import './Features.css'
import { Truck, Package, RefreshCw, MessageSquare } from 'lucide-react' 


const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <Truck className="feature-icon" />
        <h3>FREE SHIPPING</h3>
        <p>On all orders over $150</p>
      </div>

      <div className="feature-item">
        <Package className="feature-icon" />
        <h3>ORDER TRACKING</h3>
        <p>To track the status of their orders and shipments</p>
      </div>

      <div className="feature-item">
        <RefreshCw className="feature-icon" />
        <h3>RETURN & REFUND POLICY</h3>
        <p>To build trust with customers.</p>
      </div>

      <div className="feature-item">
        <MessageSquare className="feature-icon" />
        <h3>LIVE CHAT SUPPORT</h3>
        <p>Support through live chat on your website</p>
      </div>
    </div>
  )
}

export default Features
