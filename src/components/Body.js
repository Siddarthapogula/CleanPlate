import restuarants from "./mockData";
import RestuarantCard, {RestuarantWithLabel} from "./RestuarantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useGetStatus from "./useGetStatus";
import UserContext from "../UserContext";

const Body = ()=>{

    const {user, setUser} = useContext(UserContext);

    const OnlineSatus = useGetStatus();

        const [showData, setShowData] = useState([]);
        const [restuarant, setRestuarant] = useState([]);
        const [searchText, setSearctText] = useState("");

        const fetchRestuarants = async ()=>{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            // console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setShowData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestuarant(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        useEffect(()=>{
            fetchRestuarants();
        },[]);

        if(OnlineSatus === false)
        {
            return(
                <h1>Check your internet</h1>
            )

        }

        const LabelRestuarant = RestuarantWithLabel(RestuarantCard);    
        // (showData.length===0)?<Shimmer/>:
    return (

        
        <div className="">
                
                <div className="flex justify-between">
                    <div className="search">
                    <input data-testid="searchInput"  type="text" placeholder="Enter the Restuarant Name" className=" m-4 p-2 bg-blue-200 rounded-xl border border-gray-400 " value={searchText}
                        onChange={(e)=>{
                            setSearctText(e.target.value);
                        }}
                    />
                <button className="mr-2 p-2 bg-blue-300 rounded-xl border border-gray-400" onClick={()=>{
                        const filteredData = restuarant.filter((res)=>{ 
                            return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setShowData(filteredData);
                }}>
                    search</button>
                    {/* <input type="text"  value={user.name} onChange={e=>setUser({
                        name:e.target.value,
                        email:"text.mail.com"
                    })} className=" bg-blue-100  p-2"/> */}
                    </div>
                    
                <div className="">
                    <button className="m-4 p-2 bg-blue-300 rounded-xl border border-gray-400"
                        onClick={()=>{
                               const topFiltered=  restuarant.filter((res)=>{
                                return res?.info?.avgRating > 4;
                               });
                               setShowData(topFiltered);
                        }}
                    >Filter Top Rated Restuarant</button>
                </div>
            </div>
            <div className="flex flex-wrap "> 
                {
                    
                    showData?.map(res=> 
                    <Link  data-textid= "card" className="cursor-default " to ={"/resturant/"+encodeURIComponent(res.info.name)+"/"+encodeURIComponent(res.info.cuisines)+"/"+encodeURIComponent(res.info.locality)+"/"+encodeURIComponent(res.info.avgRating)+"/"+encodeURIComponent(res.info.cloudinaryImageId)
                }>
                    {res.info.isOpen ? (
                <LabelRestuarant  data-textid= "card" resData={res.info} />
                        ) : (
              <RestuarantCard   resData={res.info} />
            )}
                   </Link> 
                    )
                }
            </div>
        </div>
    )
};

export default Body;