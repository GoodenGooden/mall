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
        <div className="bg-slate-700 h-screen relative " >
      {show && <User />   }
            <div >
<div >
<img className=" w-full h-screen object-cover absolute mix-blend-overlay" src="/image/happy.webp "/>
<div className="flex absolute top-1/2 left-1/1 px-6 lg:top-2/4 left-1/4 ">
<p className=" antialiased text-neutral-300 font-serif lg:text-5xl font-bold uppercase">For Amazing Shopping Start By Telling Us Your Name </p>
    <button onClick={handleClick} className="text-neutral-300 animate-pulse "> 
<Arrow />

</button>

</div>
</div>
            </div>
          
        </div>
    )
}

export default Home


/*
className="bg-cover bg-center h-screen bg-[url('/image/happy.webp')]  " 
*/