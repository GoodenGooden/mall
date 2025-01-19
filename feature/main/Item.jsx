import { useDispatch, useSelector } from "react-redux"
import Hearted from "../../SVG/Hearted"
import Minus from "../../SVG/Minus"
import Plus from "../../SVG/Plus"
import { addItem, getLiked, removeLiked } from "../liked/likedSlice"
import { addShoppedItem, decreaseShoppedItem, getCart, getCurrentQuantityById, increaseShoppedItem, removeCart,  } from "../shopped/shoppedSlice"



function Item({itemed}) {
    const {id, image, price, title, description, quantity} = itemed
    const dispatch = useDispatch()
    const liked = useSelector(getLiked) 
    const ifLiked = liked.some((item) => item.id === id)      //some here checked if any id in the liked array is equal to id
    const cart = useSelector(getCart)
    const cartShopped = cart.some((item) => item.id === id)      // to have acees to the items already in the cart
    const currentQuantity =  useSelector(getCurrentQuantityById(id))


    function handleLiked () {

if (ifLiked) {
    dispatch(removeLiked(id))
} else {

    const newLikeditem = {
        id,
        image,
        description,
        quantity: 1,
    }
     dispatch(addItem(newLikeditem))
    
}

}

function handleShopped (id) {
    const newShoppedItem = {
        id,
        image,
        title,
        description,
        price,
        quantity: 1,               //here added the quantity as part of the recieved data object thats how i got access to quantity
        totalPrice: price * 1,

    };
  // dispatch(addShoppedItem(newShoppedItem))

  // Check if the item is already in the cart
 // const itemInCart = cart.find((item) => item.id === id);
 // if (itemInCart) {
      // If the item exists, increment the quantity
  //    dispatch(increaseShoppedItem(id));
 // } else {
      // If the item doesn't exist, add it as a new item to the cart
   //   dispatch(addShoppedItem(newShoppedItem));
  //}

  if (cartShopped) {
    dispatch(increaseShoppedItem(id));
  } else {
    dispatch(addShoppedItem(newShoppedItem));
  }


}


function handleCart() {
    // Ensure the item exists in the cart
    if (cartShopped) {
       

        if (currentQuantity > 1) {
            // Decrease quantity
            dispatch(decreaseShoppedItem(id));
        } else {
            // Optionally, remove item from cart if quantity is 1
            dispatch(removeCart(id));
        }
    }
}


    return (
        
  <div>
     <img src= {image} alt="img" />
     <div className="flex justify-around bg-slate-900">
         <div className="text-white"> <Minus id={id} handleCart={handleCart} cartShopped={cartShopped} /> </div>
         <div className="text-white"> {currentQuantity} </div>
         <div className="text-white"> <Hearted  id={id} handleLiked={handleLiked} ifLiked = {ifLiked}/> </div>
         <div className="text-white"> <Plus id={id} handleShopped={handleShopped} cartShopped={cartShopped} /> </div>
         
     </div>
     <div className=" text-center font-bold text-slate-900">#{price} </div>
   
     <div className=" text-center font-bold text-slate-900 mt-1">{title} </div>
     
    </div>

    )
}

export default Item
