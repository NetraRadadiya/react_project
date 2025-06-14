import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='nav'>
            <div>
                <Link className='paul' to="/">paul smith</Link> &nbsp;
            </div>
            <div className='navs d-flex'>
                <Link className='navbar' to="/product">SALE</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">NEW IN</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">MANS</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">WOMENS</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">JUNIOP</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">HOME</Link>&nbsp;&nbsp;
                <Link className='navbar' to="">DISCOVER</Link>&nbsp;&nbsp;
            </div>
            <div>
                <input type="search" placeholder='Search' />
            </div>
            <div className='icon'>
                <FaRegQuestionCircle />&nbsp;&nbsp;
                <AiOutlineDollar />&nbsp;&nbsp;
                <Link to="/login" style={{textDecoration:"none" , color:"black"}}>
                <CiFaceSmile />&nbsp;&nbsp;
                </Link>
                <Link to="/cart" style={{textDecoration:"none" , color:"black"}}>
                <BsBookmark />&nbsp;&nbsp;
                </Link>
                <IoBagOutline />&nbsp;&nbsp;
            </div>

            {/* <br /><br />  */}
            {/* <Link style={{textDecoration:"none"}} to="/login">login</Link> */}
        </div>
    )
}

export default Navbar
