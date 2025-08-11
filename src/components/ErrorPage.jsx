import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    let title = "Terjadi kesalahan!";
    let message = "Maaf, ada sesuatu yang salah.";

    // Kalau error berasal dari router (misalnya 404, 500)
    if (isRouteErrorResponse(error)) {
        title = `Error ${error.status}`;
        message = error.statusText || message;
    } 
    // Kalau error dari throw biasa (misalnya throw new Error())
    else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>{title}</h1>
            <p>{message}</p>
            <hr />
            <p>
                <a href="/">Kembali ke beranda</a>
            </p>
        </div>
    );
}
