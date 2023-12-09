import { IMG_URL } from "./constats";
import UserContext from "../UserContext";
import { useContext } from "react";
const RestuarantCard = (props)=>{

    const {user}= useContext(UserContext);
    

    const {resData } = props;
    // console.log(resData);
    // const {cloudinaryImageId, avgRating, name, areaName, cuisines,totalRatingsString} = resData;
    const { cloudinaryImageId, avgRating, name, areaName, cuisines, totalRatingsString } = resData || {};

    return(
        
        <div className="m-3 border h-[400px] border-gray-400  rounded-lg cursor-default hover:cursor-pointer hover:transform duration-200 hover:scale-105 hover:shadow-2xl">
        <div className="w-[225px] rounded-lg  p-2 text-center ">
                <img className=" w-[225px]  rounded-lg " src= {IMG_URL+cloudinaryImageId}/>
                <h1 className=" font-semibold text-xl">{name}</h1>
                <h2 className=" text-md">{cuisines?.slice(0,4).join(" , ")}</h2>
                <h3 className="text-sm">{areaName}</h3>
                <h5 className="text-sm">{totalRatingsString} {avgRating} ⭐</h5>
                <h5 className="text-sm">{user.name} </h5>

                
        </div>
        </div>
    )
};

export const RestuarantWithLabel = (RestuarantCard)=>{
    return (props)=>{
        return(
        <div>
            <h1 className="absolute  bg-black text-white ">Open</h1>
            <RestuarantCard {...props}/>
        </div>
            
        )
    }
}

export default RestuarantCard;