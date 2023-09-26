import './Choose.css'
import logo from './drool-html/images/heading-img.png'
import dog1 from './drool-html/images/pet1.png'
import dog2 from './drool-html/images/pet2.png'
import omega from './drool-html/images/omega.png'
import arrow from './drool-html/images/link-arrow.png';
import standards from './drool-html/images/dog.png'
import quality from './drool-html/images/shield.png'

function Choose(){
    return(
        <div className='Choose'>
            <img src={logo}></img><br/>
            <h2 className='heading'>Why Choose US</h2>
            It is a long established fact that a reader will be distracted by the readable content of a
<br/>
<div className='img'>
<img src={dog1} className='dog1'></img>
<img src={omega} className='omega'></img>
<div className='word1'>pet nutritionists</div>
</div>
<div className='img2'>
<img src={dog2} className='dog2'></img>
<img src={standards} className='standards'></img>
<div className='word2'>standards</div>
</div>
<div className='img3'>
<img src={dog2} className='dog3'></img><br/>
<img src={quality} className='quality'></img>
<div className='word3'>quality & safety</div>
</div>
<button className='b1'>READ MORE <img src={arrow}></img></button>

   </div>

    )
}
export default Choose