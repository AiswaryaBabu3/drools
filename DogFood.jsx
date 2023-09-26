import React from "react";
import "./Dogfood.css"
import logo from './drool-html/images/heading-img.png';
import "bootstrap";
import food1 from "./drool-html/images/f1.png";
import food2 from "./drool-html/images/f2.png";
import food3 from "./drool-html/images/f3.png"


function Dogfood(){
    return(
        <div>
<div className="Food">
    <div>
<img src={logo} className='logo'></img>
<h1 className="head">Our Dog Food
</h1>
<p className="head">It is a long established fact that a reader will be distracted by the readable content of a
</p><div className="food-container">
    <div className="box">
        <div className="image-box">
            <img src={food1} className="fimg"></img>
        </div>
        <div className="detail-box">
        <h6>
              Basic
            </h6> 
            <h3>
            <span className="span">$</span>100</h3>
<button type="button" className="b2">BUY NOW</button>
        </div>
    </div>
    <div className="box">
    <div className="image-box">
            <img src={food2} className="f2img"></img>
        </div>
        <div className="detail-box">
        <h6>
              Basic
            </h6> 
            <h3>
            <span className="span">$</span>200</h3>
<button type="button" className="b2">BUY NOW</button>
        </div>
    </div>
    <div className="box">
    <div className="image-box">
            <img src={food3} className="f3img"></img>
        </div>
        <div className="detail-box">
        <h6>
              Basic
            </h6> 
            <h3>
            <span className="span">$</span>300</h3>
<button type="button" className="b2">BUY NOW</button>
        </div>
    </div>
</div>
</div>

</div>
        </div>
    )
}

export default Dogfood











