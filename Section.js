import { Component } from 'react';
import './Section.css';
import 'bootstrap'
import heading from './drool-html/images/heading-img.png'
import { BsFillCursorFill } from "react-icons/bs";
class Section extends Component{
    render(){
    return(
        <div className='container-lg , Section'>
            <div className='sec2'>
<img src={heading} className='heading'></img>
<h1>About Us</h1>
<p>It is a long established fact that a reader will be distracted by the readable content 
    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
    more-or-less normal distribution of letters,
</p>
<button type='submit' className='readmore'>READ MORE
<BsFillCursorFill className='arrow'/></button></div>
        </div>
        
    )
}
}
export default Section