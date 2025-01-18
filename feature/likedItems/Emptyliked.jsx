
import { useNavigate } from "react-router-dom";
import Heart from "../../SVG/Heart"
import Homeicon from "../../SVG/Homeicon"
import Shoppingcart from "../../SVG/Shoppingcart"

function Emptyliked() {

 const Navigate = useNavigate();

    function handleClick () {
        Navigate ('/main')
    }

    return (
        <div className="w-auto h-screen">
            <div className="flex justify-between p-2 lg:p-8 ">
            <div>
                <img className="size-8 lg:size-12" src="./image/download.png" alt="img" />
                </div>
                
                <input className="border-gray-300 border rounded-xl shadow-sm lg:py-3 px-3 w-6/12" type="text" placeholder="search" />
                
               
                <div className="flex gap-3 lg:gap-8">
                    <Homeicon />
                    <Heart />
                    <Shoppingcart />
                </div>
            </div>
<div className="flex justify-center mt-32 lg:mt-40">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" size-40">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

</div>
<div className="text-center">
    <p className="animate-bounce text-2xl font-mono antialiased text-slate-900 uppercase lg:text-3xl" >Your Liked Cart is Empty! </p>
<button onClick={handleClick} className="bg-slate-900 text-white w-3/12  ">Continue Shopping</button>
    
</div>
            
        </div>
    )
}

export default Emptyliked
