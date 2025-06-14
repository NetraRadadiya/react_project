import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
// import 'bootstrap/dist/css/bootstrap.min.css';       

const Home = () => {
    return (
        <div>
            {/* 50% off */}
            <div className='off row'>
                <div className='now'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_3072/v1715761648/SS24/SALE/MAIN/1._2560x600_Sale_Now_On10"
                        alt="" />
                </div>
                <div className='sale  position-static'>
                    <div className='text'>
                        <h1>Everything Now <br /> 50% Off</h1>
                        <h5>Final Reductions</h5>

                    </div>
                    <div className='shop'>
                        <h3>SHOP ALL SALE</h3> &nbsp; &nbsp;
                        <FaArrowCircleRight style={{ fontSize: "30px" }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3>SHOP NEW LINES ADDED</h3>  &nbsp; &nbsp;
                        <FaArrowCircleRight style={{ fontSize: "30px" }} />
                    </div>
                </div>
            </div>

            {/* mens and womens */}
            <div className='cloth row'>
                <div className='men '>
                    <img src="https://cottonon.com/on/demandware.static/-/Library-Sites-cog-megastore-shared-library/default/dw0224c205/group/home-page/2024/07_jul/US/HP_WK4_US_2545480_Hero_02_DT.jpg" alt="" />
                </div>
                <div className='btn'>
                    <a href="" className='male' >Mens &nbsp;<GoArrowUpRight /></a>
                    <a href="" className='women' >Womens <GoArrowUpRight /></a>
                </div>
            </div>

            {/* vintage */}
            <div className='slide' >
                <div className='shoes'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1715857819/AW24/DIGITAL/4X5/AW24_PAUL_SMITH_DIGITAL_4x57"
                        alt="" />

                </div>
                <div className=''>
                    <div>
                        <h1 style={{ fontSize: "45px", textAlign: "center" }}>The Shirt Edit</h1>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                        </p>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                        </p>
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                            Our latest collaection of shirt is filled with prints that have an <br />
                            organic, handmade feel, like this sketchbook motif which plays a <br />
                            starring role this season, appearing on shirts, knitwear, tees and <br />accessories.
                        </p>
                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* slider */}
            <div style={{ marginTop: "7%" }}>
                <div className='btns'>
                    <button className='mens'>Mens</button>
                    <button className='womens'>Womens</button>
                </div>
            </div>

            {/* Discover */}
            <div className='row' style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center", marginTop: "7%" }}>
                <div className='store'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1677599605/Shops/Floral%20St/New_Floral_Street-4x5"
                        alt="" height={300} width={200} />

                    <h2>Store Locator</h2>
                    <p>Find your naarest Pual Smith store and expore <br />our range of clothing, shoes, and accessories.</p>
                    <a href="">Discover More</a>
                </div>
                <div className='store'>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1719408344/Discover/Collections/Cycling/Paul_Smith_Cycling_collection_235-Edit-Edit-min"
                        alt="" height={300} width={200} />

                    <h2>Coming Soon:Pual Smith Cycling</h2>
                    <p>Stay tuned for our latest collection of cycling <br />clothing and accessories, including jerseys, bib <br />shorts, hats, gloves and socks.</p>
                    <a href="">Discover More</a>
                </div>
                <div>
                    <img src="https://assets.paulsmith.com/paul-smith-storyblok/f_webp,q_auto,w_828/v1718099084/AW24/DIGITAL%20TIER%202/4X5/AW24_PAUL_SMITH_STILL_LIFE_TIER2_4x516"
                        alt="" height={300} width={200} />

                    <h2>Do You Went TO Keep In Touch?</h2>
                    <p>Subscribe to our newsletter and receive 10% off <br /> your first order.</p>
                    <a href="" style={{ color: "black" }}>Discover More</a>
                </div>
            </div>

            {/* Footer */}
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



export default Home
