import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const Accordance = ({data1, ShowItems,index,onToggle})=>{
    // const [desc, setDesc] = useState(false);
    console.log(ShowItems);

    const item = "apple";
    const [icon, setIcon] = useState(false);
    const dispatch = useDispatch();
    const handleAddItems = (data)=>{
        dispatch(addItems(data));
    }
    const handleClick = ()=>{
        onToggle(index);

        setIcon(!icon);
    }
    console.log(data1);
    return(
        <>
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
        <button className="p-1 bg-black text-white cursor-pointer rounded-lg -translate-x-20 -translate-y-12 fixed" onClick={(data1)=>handleAddItems(data1)}>Add+</button>
        </>
    )
}
export default Accordance;