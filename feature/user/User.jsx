import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";


function User() {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('')
  const [buttonText, setButtonText] = useState('Submit');

  const navigate = useNavigate();
  const dispatch = useDispatch();        //to make of the action state which is the updateName we use the useDispatch hook

  function handleSubmit (e) {
     e.preventDefault();

     if (!username || !country) return
     dispatch(updateName(username));         //so here i link the redux state so it can have access to the useState input
     navigate('/main')
     
  }

  const handleClick = () => {
    setButtonText(buttonText === 'Submit' ?  'Loading...' : 'Submit'  );
};



    return (
        <form onSubmit={handleSubmit}>
            <div className=" absolute w-1/2 left-2/4 z-50 h-4/5 lg:w-full bg-white list-none ">
           
           <div className="flex flex-col  pt-6 pl-6">
            <label >Name </label>  
            <input
              className="border mb-4  border-gray-300 shadow-sm py-3 px-3 w-1/2  rounded-lg  focus:border-blue-300"
              type="text" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} />

         
              <label>Country </label>
            <input
              className="border mb-4 border-gray-300 shadow-sm py-3 px-3 w-1/2  rounded-lg  focus:border-blue-300"
              type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} />
           </div>
        <div className="absolute left-11 rounded-full bg-zinc-500 p-3 md:left-32 lg:left-60 ">
<button className="text-slate-300" onClick={handleClick}>  {buttonText} </button>
           </div>
           </div>
        </form>
    )
}

export default User


/*
 <div className="fixed float-left left-3/4 z-50 h-svh w-svw bg-white list-none ">
           
            <ul className="flex flex-col  pt-6 pl-6">
              <li className="  border-b-2 py-2 ">Send Money</li>
              <li className=" border-b-2 py-2 ">Converter</li>
              <li className=" border-b-2 py-2 ">Currency API</li>
              <li className=" border-b-2 py-2 ">Tools</li>
              <li className=" border-b-2 py-2 ">Resources</li>
            </ul>

            </div>

            */