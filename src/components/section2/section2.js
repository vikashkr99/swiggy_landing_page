import './section2.css';
import Divs from './divs';
import Img1 from './fast_delivery.png'
import Img2 from './live_order.png'
import Img3 from './min_order.png'

const section2 = () => {

    return ( 
        <div className="section2">
            <Divs imgSrc={Img3} h2Text={'No Minimum Order'} pText={'Order in for yourself or for the group, with no restrictions on order value'} altt={'no min order'}/>
            <Divs imgSrc={Img2} h2Text={'Live Order Tracking'} pText={'Know where your order is at all times, from the restaurant to your doorstep'} altt={'live order tracking'}/>
            <Divs imgSrc={Img1} h2Text={'Lightning-Fast Delivery'} pText={"Experience Swiggy's superfast delivery for food delivered fresh & on time"} altt={'fast delivery'}/>
        </div>
     );
}
 
export default section2;