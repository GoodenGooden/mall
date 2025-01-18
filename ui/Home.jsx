import { redirect} from "react-router-dom"
import Arrow from "../SVG/Arrow"
import User from "../feature/user/User";
import { useState } from "react";

function Home() {
 // const navigate = useNavigate();
    const [show, setShow] = useState(false);

    function handleClick () {  
redirect('/user')
setShow((show) => !show);

    }


    return (
        <div >
      {show && <User />   }
            <div>
<div className="bg-cover h-screen bg-[url('./image/happy.webp')]">
<div className="flex absolute top-1/2 left-1/1 px-6 lg:top-2/4 left-1/4 ">
<p className="font-mono antialiased text-slate-800 lg:text-6xl font-bold uppercase  ">For Amazing Shopping Start By Telling Us Your Name </p>
    <button onClick={handleClick} className="text-slate-900 animate-pulse "> 
<Arrow />

</button>

</div>
</div>
            </div>
          
        </div>
    )
}

export default Home
