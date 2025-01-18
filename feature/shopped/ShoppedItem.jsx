import { useSelector } from "react-redux"
import Heart from "../../SVG/Heart"
import Homeicon from "../../SVG/Homeicon"
import Shoppingcart from "../../SVG/Shoppingcart"
import Shopped from "./Shopped"
import { getCart } from "./shoppedSlice"
import { useNavigate } from "react-router-dom"

function ShoppedItem() {
const allShopped = useSelector(getCart)
const Navigate = useNavigate();
if (allShopped.length === 0) {
Navigate('/empty')
}

console.log(allShopped)

    return (
        <div className="w-auto h-screen">
            <div className="flex justify-between p-2 lg:p-8 ">
            <div>
                <img className="size-8 lg:size-12" src="./image/download.png" alt="img" />
                </div>
                
                <input className="border-gray-300 border shadow-sm lg:py-3 px-3 w-6/12" type="text" placeholder="search" />
                
               
                <div className="flex gap-3 lg:gap-8">
                    <Homeicon />
                    <Heart />
                    <Shoppingcart />
                </div>
            </div>
        <div className="text-center">
        <h1 className=" animate-bounce text-2xl font-mono antialiased text-slate-900 uppercase lg:text-7xl  ">
         Happy Shopping IB! </h1>
           
        </div>
       
        <div className="grid px-3 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">
            { allShopped &&  allShopped.map((shop) => (
                <Shopped shop={shop}  key={shop.id}/>
            ) )}
        
        </div>

<div className="flex justify-center gap-10  mt-8">
    
        <button className="bg-slate-900 text-white w-3/12 ">Continue Shopping</button>
    
    
    <button className="bg-slate-900 text-white w-3/12">Proceed To Pay</button>
    
</div>
            
        </div>
    )
}

export default ShoppedItem
