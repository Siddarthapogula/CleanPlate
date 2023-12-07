import { userInfo } from "os";
import { useState } from "react";
const Accordance = ({data1, ShowItems,index,onToggle})=>{

    // const [desc, setDesc] = useState(false);
    console.log(ShowItems);
    const [icon, setIcon] = useState(false);

    const handleClick = ()=>{
        onToggle(index);

        setIcon(!icon);
    }
   
    return(
        <div className="p-3 shadow-lg bg-gray-100 mb-2 border-b-2  cursor-pointer border-gray-250 " onClick={handleClick}>
        <div className=" text-center  flex justify-between" >
            <span className=" font-bold">{data1.title} </span>
            <span>
            {(icon) ? '⬆️' : '🔽'}
            </span>
        </div>
        <div className="my-2">
            {
                ShowItems&&<p>{data1.content}</p>
            }
        </div>
        </div>
    )
}
export default Accordance;