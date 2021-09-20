const divs = ({imgSrc, h2Text, pText, altt}) => {
    return ( 
        <div className="boxes">
            <img src={imgSrc} alt={altt} />
            <h3>{h2Text}</h3>
            <p>{pText}</p>
        </div>
     );
}
 
export default divs;