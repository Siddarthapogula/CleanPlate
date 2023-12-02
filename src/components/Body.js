import restuarants from "./mockData";
import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{

        const [showData, setShowData] = useState([]);
        const [restuarant, setRestuarant] = useState([]);
        const [searchText, setSearctText] = useState("");

        const fetchRestuarants = async ()=>{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setShowData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestuarant(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        useEffect(()=>{
            fetchRestuarants();
        },[]);

    return showData.length===0?<Shimmer/>:(
        <div className="bodyContainer">
                
                <div className="Filter-Container">
                    <div className="search">
                    <input  type="text" placeholder="Enter the Restuarant Name" className="searchBar" value={searchText}
                        onChange={(e)=>{
                            setSearctText(e.target.value);
                        }}
                    />
                <button onClick={()=>{
                        const filteredData = restuarant.filter((res)=>{ 
                            return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setShowData(filteredData);
                }}>
                    search</button>
                    </div>
                    
                <div className="filterRated">
                    <button className="rateRestuarant"
                        onClick={()=>{
                               const topFiltered=  restuarant.filter((res)=>{
                                return res?.info?.avgRating > 4;
                               });
                               setShowData(topFiltered);
                        }}
                    >Filter Top Rated Restuarant</button>
                </div>
            </div>
            <div className="cardContainer"> 
                {
                    showData.map(res=> <RestuarantCard resData = {res?.info} key= {res?.info?.id}/>)
                }
            </div>
        </div>
    )
};

export default Body;