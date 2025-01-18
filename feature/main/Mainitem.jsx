
import Heart from "../../SVG/Heart"
import Homeicon from "../../SVG/Homeicon"
import Shoppingcart from "../../SVG/Shoppingcart"
import { useSelector } from "react-redux"
import { getUser } from "../user/userSlice"
import { useLoaderData } from "react-router-dom"
import { loader } from "../../services/loader"
import Item from "./Item"

function Mainitem() {
    const item = useLoaderData();
    const items = useLoaderData()
console.log(item)
   const usernamed = useSelector(getUser);

    return ( 
        <div className="w-auto h-screen">
            <div className="flex justify-between p-2 lg:p-8 ">
            <div>
                <img className=" size-8 lg:size-12" src="/image/download.png" alt="img" />
                </div>
                
                <input className="border-gray-300 border shadow-sm lg:py-3 px-3 w-6/12" type="text" placeholder="electronic, jewelery, men's clothing, women's clothing" />
                
               
                <div className="flex pt-3 pr-4 gap-3 lg:gap-8">
                    <Homeicon />
                        <Heart />
                    <Shoppingcart />
                </div>
            </div>
        <div className="text-center">
        <h1 className=" animate-bounce text-2xl font-mono antialiased text-slate-900 uppercase lg:text-7xl  ">
         Happy Shopping {usernamed}! </h1>
           
        </div>
        <div className="text-center">
     <h2 className=" text-slate-900 font-mono mb-4 antialiased text-sm uppercase lg:text-3xl font-extrabold "> New Arrivals </h2>
        </div>
        <div className="grid px-3 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-6 ">
              
{item.map((itemed) =>(
    <Item itemed={itemed} key={itemed.id} />
))}
</div>
        </div>

    )

}
loader

export default Mainitem


