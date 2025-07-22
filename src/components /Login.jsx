import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSIgnInData, checkValidSIgnUpData } from "../utils/validate";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        //form data validation
        let msg;

        const nameVal = name.current?.value
        const emailVal = email.current?.value;
        const passwordVal = password.current?.value;

        if (!isSignInForm) {
            // Only access confirmPassword ref if it's SignUp
            const confirmPasswordVal = confirmPassword.current?.value || "";
            msg = checkValidSIgnUpData(nameVal, emailVal, passwordVal, confirmPasswordVal);
        } else {
            msg = checkValidSIgnInData(emailVal, passwordVal);
        }

        setErrorMessage(msg);
        if (msg) return;
        if (!isSignInForm) {
            //signUp logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    setErrorMessage("User registered successfully!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, "==>", errorMessage);
                    let messageToDisplay =
                        "An unexpected error occurred. Please try again.";

                    switch (errorCode) {
                        case "auth/invalid-credential":
                            messageToDisplay =
                                "Invalid email or password. Please check your credentials and try again.";
                            break;
                        case "auth/email-already-in-use":
                            messageToDisplay =
                                "User with this email is already registered";
                            break;
                        case "auth/user-disabled":
                            messageToDisplay =
                                "Your account has been disabled. Please contact support.";
                            break;
                        case "auth/too-many-requests":
                            messageToDisplay =
                                "Too many failed login attempts. Please try again later.";
                            break;
                        case "auth/network-request-failed":
                            messageToDisplay =
                                "Network error. Please check your internet connection.";
                            break;
                        default:
                            messageToDisplay =
                                errorMessage ||
                                "An unexpected error occurred. Please try again.";
                            break;
                    }
                    setErrorMessage(messageToDisplay);
                });
        } else {
            //signin logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setErrorMessage("Sign-in successfully!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    let messageToDisplay =
                        "An unexpected error occurred. Please try again.";

                    switch (errorCode) {
                        case "auth/invalid-credential":
                            messageToDisplay =
                                "Invalid email or password. Please check your credentials and try again.";
                            break;
                        case "auth/user-not-found":
                            messageToDisplay =
                                "No user found with this email. Please sign up or check your email.";
                            break;
                        case "auth/user-disabled":
                            messageToDisplay =
                                "Your account has been disabled. Please contact support.";
                            break;
                        case "auth/too-many-requests":
                            messageToDisplay =
                                "Too many failed login attempts. Please try again later.";
                            break;
                        case "auth/network-request-failed":
                            messageToDisplay =
                                "Network error. Please check your internet connection.";
                            break;
                        default:
                            messageToDisplay =
                                errorMessage ||
                                "An unexpected error occurred. Please try again.";
                            break;
                    }
                    setErrorMessage(messageToDisplay);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
                    alt=""
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 text-white p-12 absolute my-36 rounded-lg mx-auto left-0 right-0 "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}
            >
                <h1 className="font-bold text-white text-2xl my-4 ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        ref={name}
                        className="p-4  m-2 my-4 w-full bg-gray-800"
                        required
                    />
                )}
                <input
                    type="text"
                    placeholder="Email Address"
                    ref={email}
                    className="p-4 mx-2 my-4 w-full bg-gray-800 "
                    required
                />
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        ref={password}
                        className="p-4  m-2 my-4 w-full bg-gray-800 block rounded-md shadow-sm focus:ring-white  sm:text-sm transition duration-150 ease-in-out " //
                        placeholder="password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 hover:text-gray-900 focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {/* Eye Icon SVG */}
                        {showPassword ? (
                            < svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off">
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a20.89 20.89 0 0 1 5.08-6.11" />
                                <path d="M1 1l22 22" />
                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                <path d="M14.12 14.12L21 21" />
                                <path d="M3 3l9 9" />
                            </svg>
                        )}
                    </button>
                </div>
                {
                    !isSignInForm && (
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                ref={password}
                                className="p-4  m-2 my-4 w-full bg-gray-800 block rounded-md shadow-sm focus:ring-white  sm:text-sm transition duration-150 ease-in-out " //
                                placeholder="password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 hover:text-gray-900 focus:outline-none"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {/* Eye Icon SVG */}
                                {showPassword ? (
                                    < svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off">
                                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a20.89 20.89 0 0 1 5.08-6.11" />
                                        <path d="M1 1l22 22" />
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M14.12 14.12L21 21" />
                                        <path d="M3 3l9 9" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    )
                }
                {
                    errorMessage && (
                        <div
                            className={`p-4 m-2 rounded-md text-sm ${errorMessage.includes("successful")
                                ? "bg-green-200 text-green-900 border border-green-200 w-full"
                                : "bg-red-200 text-red-900 border border-red-200 w-full"
                                }`}
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )
                }

                <button
                    className="p-4 mx-2 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {
                    isSignInForm ? (
                        <p className="text-white font-semi-bold py-8 px-2 cursor-pointer">
                            New to Netflix ?{" "}
                            <span
                                className="hover:underline font-bold"
                                onClick={toggleSignInForm}
                            >
                                Sign up now
                            </span>
                        </p>
                    ) : (
                        <p className="text-white font-semi-bold py-8 px-2 cursor-pointer">
                            Already registered ?{" "}
                            <span
                                className="hover:underline font-bold"
                                onClick={toggleSignInForm}
                            >
                                Sign In now
                            </span>
                        </p>
                    )
                }
            </form >
        </div >
    );
};

export default Login;
