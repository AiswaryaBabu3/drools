import './Bluesection.css'
import Card from 'react-bootstrap/Card';
import dog from './drool-html/images/dog.jpg'
import bird from './drool-html/images/bird.jpg'
import fish from './drool-html/images/fish.jpg'
import cat from './drool-html/images/cat.jpg'

function Bluesection(){
    return(
        <div className='Blue'>
          <div className='images'>
    <Card className='card'>
    <Card.Img src={dog} className='img1'/>
    <Card.Body className='center'>
    <Card.Text><h4>Cute Dog
</h4>
    It is a long established fact that a reader will be distracted by
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card'>
    <Card.Img src={bird} className='img1'/>
    <Card.Body className='center'>
    <Card.Text><h4>Birds
</h4>
    It is a long established fact that a reader will be distracted by


        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card'>
    <Card.Img src={fish} className='img1'/>
    <Card.Body className='center'>
    <Card.Text><h4>Fish</h4>
    It is a long established fact that a reader will be distracted by


        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='card'>
    <Card.Img src={cat} className='img1'/>
    <Card.Body className='center'>
    <Card.Text ><h4>Cat Bite</h4>
    It is a long established fact that a reader will be distracted by


        </Card.Text>
      </Card.Body>
    </Card>
</div>

            </div>
        
    
    )
}
export default Bluesection