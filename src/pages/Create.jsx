import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";

const Create = () => {
    return (
        <div>
            <div style={{ padding: "0px 10%" }}> 
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "70px" }}>Create an account</h1>
                    <h4 style={{ fontSize: "20px" }}>Already have an account?<Link to="/login" className='account'>Log in</Link></h4>
                </div>

                <div>
                    <p style={{ fontSize: "25px" }}>Personal Information</p><br />
                    <h2 style={{ color: "lightgray" }}>First Name*</h2> 
                    <h2 style={{ color: "lightgray" }}>Last Name*</h2>
                    <h2 style={{ color: "lightgray" }}>Email*</h2><br /><br />

                    <p style={{ fontSize: "25px" }}>Choose a Password</p><br />
                    <h2 style={{ color: "lightgray" }}>New Password*</h2>
                    <h2 style={{ color: "lightgray" }}>Confirm new password*</h2>
                </div>

                <div style={{ textAlign: "center" }}>
                    <button className='log'>Create your account</button>
                </div>
            </div>

            {/* FOOTER */}
            <div style={{ backgroundColor: "black", height: "1000px", width: "100%", marginTop: "10%", color: "white" }}>
                <div style={{ display: "flex", padding: "8% 10%" }}>
                    <div style={{ marginRight: "6%" }}>
                        <h3>ABOUT PUAL SMITH</h3>
                        <p>OUR STORES</p>
                        <p>OUR HISTORY</p>
                        <p>CAREERS</p>
                        <p>SUSTAINABILITY</p>
                        <p>ACCESSIBILITY</p>
                    </div>

                    <div style={{ marginRight: "6%" }}>
                        <h3>HELP</h3>
                        <p>FAQS</p>
                        <p>TRACK ORDER</p>
                        <p>SHIPPING</p>
                        <p>RETUNS</p>
                        <p>PAYMENT METHODS</p>
                        <p>KLARNA</p>
                        <p>PRICE MATCH</p>
                        <p>SHOP SERVICE</p>
                    </div>

                    <div style={{ marginRight: "6%" }}>
                        <h3>CONTACT US</h3>
                        <p>CONTACT FORM</p>
                        <p>+44(O)115 968 5821</p>
                        <p>06:00-14:0(EST) MONDAY- <br />FRIDAY EXCEPT PUBLIC <br />HOLIDAYS IN THE USA.</p>
                    </div>
                </div>

                <div style={{ display: "flex", padding: " 0px 8%", justifyContent: "space-between" }}>
                    <div>
                        <p className='newletter'>Enter your email to subscribe to our newletter <FaArrowCircleRight /></p>
                    </div>

                    <div>
                        <p>X</p>
                        <p>FACEBOOK</p>
                        <p>INSTAGRAM</p>
                        <p>YOUTUBE</p>
                        <p>PINTEREST</p>
                        <p>LINKEDIN</p>
                    </div>
                </div>

                <div style={{ textAlign: "end", padding: "0px 8% 8% 0px", color: "gray", backgroundColor: "black" }}> {/* <div style={{ padding: "0px 0px 8% 0%", backgroundColor: "black" }}> */}
                    <p>Pual Smith. All right reserved</p>
                    <p>Terms & Conditions</p>
                    <p>Gift Card Terms & Conditions</p>
                    <p>Data & Private Policy</p>
                    <p>Cookie Policy</p>
                    <p>Modeen Slavery Statement</p>
                    <p>Cookie Perferences</p>
                </div>
            </div>
        </div>
    )
}

export default Create
