import { IMG_URL } from "./constats";
const RestuarantCard = (props)=>{
    const {resData } = props;
    const {cloudinaryImageId, avgRating, name, area, cuisines,totalRatingsString} = resData;
    return(
        <div className="hoverBack">
        <div className="restuarantCard">
                <img className="resImg " src= {IMG_URL+cloudinaryImageId}/>
                <h1 className="resName text">{name}</h1>
                <h2 className="cuis text">{cuisines.slice(0,4).join(" , ")}</h2>
                <h3 className="text">{area}</h3>
                <h5 className="text">{totalRatingsString} {avgRating} ⭐</h5>
        </div>
        </div>
    )
};

export default RestuarantCard;