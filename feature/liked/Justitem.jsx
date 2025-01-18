
import { useDispatch } from "react-redux"
import Hearted from "../../SVG/Hearted"
import Minus from "../../SVG/Minus"
import Plus from "../../SVG/Plus"
import { removeLiked } from "./likedSlice"


function JustItem({liker}) {
  const {id, image, description} = liker
const dispatch = useDispatch()

  const handleLiked = (id) => {
    dispatch(removeLiked(id)); // Remove item from liked list
  }
  
    return (
        <div>
        <img src={image} alt="img" />
        <div className="flex justify-around bg-slate-900">
            <div className="text-white"> <Minus /> </div>
            <div className="text-white"> 0 </div>
            <div className="text-white"> <Hearted id={liker.id} handleLiked={() =>handleLiked(liker.id)} ifLiked={true}  /> </div>
            <div className="text-white"> <Plus /> </div>
        </div>
        <div className="text-bg-slate-900">{description} </div>
        </div>
    )
}

export default JustItem 

