import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
    return (
        <>
        <NavLink className={({ isActive, isPending }) => 
        isActive ? "active" : isPending ? "pending" : ""
        } style={{
            marginRight: "12px",
            padding: ".5rem",
            borderRadius: ".5rem"
        }} to="/">Home</NavLink>|
        
        <NavLink className={({ isActive, isPending }) => 
        isActive ? "active" : isPending ? "pending" : ""
        } style={{
            marginRight: "12px",
            marginLeft: "12px",
            padding: ".5rem",
            borderRadius: ".5rem"
        }} to="/about">About</NavLink>|
        
        <NavLink className={({ isActive, isPending }) => 
        isActive ? "active" : isPending ? "pending" : ""
        } style={{
            marginLeft: "12px",
            padding: ".5rem",
            borderRadius: ".5rem"
        }} to="/blog">Blog</NavLink>
        <hr />
        <Outlet />
        </>
    )
}

export default RootLayout;