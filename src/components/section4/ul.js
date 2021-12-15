const Ul = ({ listarray, heading }) => {

    return ( 
        <div className="list">
            <p>{heading}</p>
            <ul>
                {listarray.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default Ul;