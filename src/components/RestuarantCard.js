const RestuarantCard = (props)=>{
    const {resData } = props;
    const {cloudinaryImageId, avgRating, name, area, cuisines,totalRatingsString} = resData;
    return(
        <div className="restuarantCard">
                <img className="resImg" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
                <h1>{name}</h1>
                <h3>{cuisines.join(" , ")}</h3>
                <h3>{area}</h3>
                <h3>{avgRating} ⭐</h3>
                <h3>{totalRatingsString}</h3>
        </div>
    )
};

export default RestuarantCard;