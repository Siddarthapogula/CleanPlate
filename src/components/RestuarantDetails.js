import { useParams } from "react-router-dom";
import { IMG_URL } from "./constats";
import accordionData from "./mockAccordianData";
import Accordance from "./Accordance";
import { useState } from "react";


const RestuarantDetails = ()=>{
   
    const [Index, setIndex] = useState(null);
    const { name, cuisines, locality, rating, image} = useParams();

    const handleToggle = (index)=>{
        setIndex((prevIndex)=>prevIndex===index?null:index)
    }

    console.log(name);
    console.log(cuisines);
    console.log(locality);
    console.log(rating);
    console.log(image);
    console.log(accordionData[0].title);

    return(
        // <div className="container-detailed">
        // <div className="detailsContainer">
        //     <h1>🔥🔥🔥Restuarant Details🔥🔥🔥</h1>
        //     <img className="detailImg" src={IMG_URL+image}></img>
        //     <h2 className="centeredTexth2">{cuisines}😋</h2>
        //     <h2 className="centeredTexth2">{locality}📍</h2>
        //     <h2 className="centeredTexth2">{rating} ⭐</h2>
        // </div>
        // </div>
        
            <div className=" my-[50px] w-6/12 m-auto my ">
               {accordionData.map((data,index)=><Accordance  data1 = {data}
               key={data.id}
                ShowItems={(index===Index)}
                onToggle = {handleToggle}
                index ={index}
               
               />)} 
            </div>
            
      
        
    )
}

// const Accordian = ()=>{
//     return(
//        accordionData.map((data)=>{
//             <h1>{data.title}</h1>
//        })
//     )
// }
export default RestuarantDetails;