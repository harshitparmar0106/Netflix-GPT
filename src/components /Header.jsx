import { CgProfile } from "react-icons/cg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../assets/Constants";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((store) => store.user);

    const showSignOut = location.pathname !== "/";
    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Sign-out successfully!", {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
                hideProgressBar: false,
            });
            navigate("/");
        }).catch((error) => {
            toast.error("Sign-out failed: " + error.message, {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
                closeOnClick: true,
                hideProgressBar: false,
            });
        });
    };

    return (
        <div className="absolute w-screen flex justify-between  px-4 py-2 bg-gradient-to-b from-black z-50">
            <img className="w-44" src={LOGO} alt="" />
            <div className="flex gap-4 items-center justify-center p-4">
                <div className="flex gap-2 cursor-pointer bg-black px-2 py-2 rounded-md">
                    <CgProfile className="w-8 h-8 text-red-500 text-2xl cursor-pointer" />
                    <span className="text-white text-lg">{user?.displayName || "Guest"}</span>
                </div>
                {
                    showSignOut && <button className=" block bg-red-500 px-2 py-3 text-white rounded-md cursor-pointer" onClick={handleSignOut}>Sign out</button>
                }
            </div>
        </div>
    );
}

export default Header;