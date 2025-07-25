import { Route, Routes, useNavigate } from "react-router-dom";
import Browse from "./Browse.jsx";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { ToastContainer } from 'react-toastify';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, uid } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, user_id:uid }))
                navigate("/browse");

            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, [])


    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default Body;