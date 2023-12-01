import restuarants from "./mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = ()=>{

        const [showData, setShowData] = useState(restuarants);

    return(
        <div className="bodyContainer">
            console.log(searchTerm);
                
                <div className="Filter-Container">
                    <div className="search">
                    <input  type="text" placeholder="Enter the Restuarant Name" className="searchBar" value={searchTerm}
                        onChange={(e)=>{
                            setSearchTerm(e.target.value);
                        }}
                    />
                <button 
                    onClick={handleSearch()}
                >search</button>
                    </div>
                    
                <div className="filterRated">
                    <button className="rateRestuarant"
                        onClick={()=>{
                               const topFiltered=  restuarants.filter((res)=>{
                                return res.info.avgRating > 4;
                               });
                               setShowData(topFiltered);
                        }}
                    >Filter Top Rated Restuarant</button>
                </div>
            </div>
            <div className="cardContainer"> 
                {
                    showData.map(res=> <RestuarantCard resData = {res.info} key= {res.info.id}/>)
                }
            </div>
        </div>
    )
};

export default Body;