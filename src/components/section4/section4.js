import './section4.css';
import Ul from './ul';
import Img1 from '../section3/astore.png';
import Img2 from '../section3/gplay.png';
import Footerr from './footerr';

const section4 = () => {

    const list1 = ['About us', 'Team', 'Careers', 'Swiggy Blog', 'Bug Bounty', 'Swiggy Super', 'Swiggy Corporate', 'Swiggy Instamart'];
    const list2 = ['Help & Support', 'Partner with us', 'Ride with us'];
    const list3 = ['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy', 'Cookie Policy', 'Offer Terms', 'Phishing & Fraud'];

    return ( 
        <div className="section4">
            <div className="outter">
                <Ul listarray = {list1} heading={'COMPANY'}/>
                <Ul  listarray = {list2} heading={'CONTACT'}/>
                <Ul  listarray = {list3} heading={'LEGAL'}/>
                <div className="buttons">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Img1} alt="" />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Img2} alt="" />
                    </a>
                </div>
            </div>
            
            <Footerr />
        </div>
     );
}
 
export default section4;