import './section3.css';
import Img1 from './phone1.png';
import Img2 from './phone2.png';
import Img3 from './astore.png';
import Img4 from './gplay.png';

const section3 = () => {
    return (
        <div className="section3">
            <div className="outterdiv">
                <h1>
                    Restaurants in <br /> your pocket
                </h1>
                <p>
                    Order from your favorite restaurants &amp; track on the go, with the all-new Swiggy app.
                </p>
                <div className="buttons">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Img4} alt="" />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Img3} alt="" />
                    </a>
                </div>
            </div>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
        </div>
    );
}

export default section3;