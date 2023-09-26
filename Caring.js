import './Caring.css';
import imgpet from './drool-html/images/pet-bg.png';
import dog from'./drool-html/images/pet-img.png';
import logo from './drool-html/images/heading-img.png';
import arrow from './drool-html/images/link-arrow.png';

function Caring(){
    return(
<div className='Caring'>
    
<div className='dogimage'> <img src={imgpet} className='ycolor'></img>
 <img src={dog} className='colordog'></img></div>
 <div className='caringdog'>
    <img src={logo} className='logo1'></img>
    <h2 className='carepara'>Caring for your pets</h2>
    <p className='p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
    <button className='button'>READ MORE <img src={arrow}></img></button>
    </div>
</div>
    )
}
export default Caring


