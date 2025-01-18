
import { useDispatch, useSelector } from "react-redux"
import Hearted from "../../SVG/Hearted"
import Minus from "../../SVG/Minus"
import Plus from "../../SVG/Plus"
import { decreaseShoppedItem, getCurrentQuantityById, increaseShoppedItem, removeCart } from "./shoppedSlice"



function Shopped({shop}) {
    const {id, image, price, totalPrice, description} = shop
const dispatch = useDispatch()
const currentQuantity = useSelector(getCurrentQuantityById(id))
 //   function handleCart () {
//dispatch(decreaseShoppedItem(id))
 //   }

 function handleDecrease() {
    if (currentQuantity > 1) {
        dispatch(decreaseShoppedItem(id)); // Decrease quantity
    } else {
        // Optionally, handle item removal when quantity reaches 1 or 0
        dispatch(removeCart(id)); // If needed, you can remove the item entirely
    }
}

//function handleIncrease () {
//    if (currentQuantity >= 0) {
 //       dispatch(increaseShoppedItem(id));     its not increasing in the shopped component cos push payload is added to the plus icon
    
//}
//}

    return (
        <div>
        <img src= {image} alt="img" /> 
        <div className="flex justify-around bg-slate-900">
            <div className="text-white"> <Minus id={id} handleCart={handleDecrease} cartShopped={true}/> </div>
            <div className="text-white"> {currentQuantity} </div>
            <div className="text-white"> <Hearted /> </div>
            <div className="text-white"> <Plus id={id} handleCart cartShopped={true} /> </div>
        </div>
        <div className=" text-center text-slate-900"> #{totalPrice} </div>
        <div className="text-slate-900">{description} </div>
        </div>
    )
};

export default Shopped

