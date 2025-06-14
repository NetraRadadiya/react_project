import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function Product() {
  const [product, setproduct] = useState([]);

  const getdata = () => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,2fr)",
          gap: "5px",
          marginTop: "60px",
          marginLeft: "5%"
        }}
      >
        {product.map((el) => (
          <div style={{ paddingTop: "5px",border:"double",textAlign:"center" }} key={el.id} className="data">
                <Link to={`/description/${el.id}`}>
                   <img src={el.urls} alt="" height={"300px"} width={"300px"}/>
                </Link>
                    <h3>{el.title}</h3>
                    <h3>price: {el.price}</h3>
                    <h3>discounted-price: {el.discounted_price}</h3>
                    <h3>Discount:  {el.discount}</h3>
                
             
          </div>
        ))}
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
  );
}

export default Product;

