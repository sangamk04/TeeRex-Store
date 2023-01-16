import React from 'react'

const Navbar = () => {
    return (
        <div>

            <div style={{ height: "50px", width: "100%", backgroundColor: "blue" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <h4 style={{ color: "white" }}>TreeRex Store</h4>
                    <h4 style={{ color: "white" }}>Product</h4>
                    <img style={{width:"30px", height:"30px"}} src='https://img.icons8.com/material-outlined/2x/shopping-cart.png'></img>          
                </div>

            </div>

        </div>
    )
}

export default Navbar
