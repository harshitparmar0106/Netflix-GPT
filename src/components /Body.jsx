import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Browse.jsx";
import Login from "./Login";

const Body = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/browse" element={<Browse/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Body;