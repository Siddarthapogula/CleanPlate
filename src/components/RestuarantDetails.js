import { useParams } from "react-router-dom";
import { IMG_URL } from "./constats";
const RestuarantDetails = ()=>{
   
    const { name, cuisines, locality, rating, image} = useParams();
    console.log(name);
    console.log(cuisines);
    console.log(locality);
    console.log(rating);
    console.log(image);

    return(
        <div className="container-detailed">
        <div className="detailsContainer">
            <h1>🔥🔥🔥Restuarant Details🔥🔥🔥</h1>
            <img className="detailImg" src={IMG_URL+image}></img>
            <h2 className="centeredTexth2">{cuisines}😋</h2>
            <h2 className="centeredTexth2">{locality}📍</h2>
            <h2 className="centeredTexth2">{rating} ⭐</h2>
        </div>
        </div>
        
    )
}
export default RestuarantDetails;