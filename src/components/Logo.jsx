/*import React from 'react'

function Logo() {
  return (
    <div className="Logo">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
      </svg>
      
      <span>TechStore</span>
    </div>
  )
}

export default Logo
*/
import CartWidget from "./CartWidget"
import "./navbar.css"
function Logo ()  {
  return (
    <img src = "/img/logo.png" alt="Logo" width="40" height="40" className="mr-2" /> 
  );
};

export default Logo
