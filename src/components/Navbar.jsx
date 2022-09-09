import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">LMKchats</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/13415399/pexels-photo-13415399.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}
