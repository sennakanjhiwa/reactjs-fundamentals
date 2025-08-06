import { useState } from "react";
import Article from "../components/Article";
import posts from "../posts.json";

function Homepage() {
    const [search, setSearch] = useState("");

    const changeSearch = (event) => {
        setSearch(event.target.value);
    };
    return (
        <>
            <h1>Simple Blogs</h1>
            <div>
                Cari artikel : <input onChange={changeSearch} type="text" />{""}
            </div>
            <small>Ditemikan 0 data dengan pencarian kata {search}</small>
            {posts.map(({title, tags, date}, index) => (
                <Article {...{title, tags, date}} key={index} />
            ))}
        </>
    );
}

export default Homepage;