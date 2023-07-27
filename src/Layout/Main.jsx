import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes("login") || location.pathname.includes("register")
    return (
        <div>
            {/* {noNavbarFooter || <Navbar/>} */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            {noNavbarFooter || <Footer/>}
        </div>
    );
};

export default Main;