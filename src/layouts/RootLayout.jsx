import { Link,Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
        <hr />
        <Outlet />
        </>
    )
}

export default RootLayout;