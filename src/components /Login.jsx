import { useRef, useState } from "react";
import Header from "./Header";
import { checkValiddata } from "../utils/validate";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    
    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)


    
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
        //form data validation
        e.preventDefault()
        const msg = checkValiddata(email.current.value,password.current.value,name.current.value)
        setErrorMessage(msg);
    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt="" />
            </div>
            <form action="" className="w-3/12 text-white p-12 absolute my-36 rounded-lg mx-auto left-0 right-0 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                <h1 className="font-bold text-white text-2xl my-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && 
                    <input 
                    type="text"
                    placeholder="Full Name" 
                    ref={name}
                    className="p-4  m-2 my-4 w-full bg-gray-800"
                    required 
                     /> 
                }
                <input  
                    type="emai"
                    placeholder="Email Address"
                    ref={email}
                    className="p-4 mx-2 my-4 w-full bg-gray-800 "
                    required
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    ref={password}
                    className="p-4  m-2 my-4 w-full bg-gray-800"
                    required 
                />
                <p className="text-red-500 px-2 text-lg">{errorMessage}</p>
                <button className="p-4 mx-2 my-4 bg-red-700 w-full rounded-lg cursor-pointer" onSubmit={(e)=>{e.preventDefault}} onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                {isSignInForm ? <p className="text-white font-semi-bold py-8 px-2 cursor-pointer">New to Netflix ? <span className="hover:underline font-bold" onClick={toggleSignInForm}>Sign up now</span></p> : <p className="text-white font-semi-bold py-8 px-2 cursor-pointer">Already registered ? <span className="hover:underline font-bold" onClick={toggleSignInForm}>Sign In now</span></p>}
            </form>
        </div>
    );
}

export default Login;