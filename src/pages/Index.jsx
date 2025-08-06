import Article from "../components/Article";
import dataPosts from "../posts.json";
import Search from "../components/Search";
import { useState } from "react";

function Homepage() {
    const [posts, setPosts] = useState(dataPosts)

    const onSearchChange = (value) => {
        const filteredPosts = dataPosts.filter(item => item.title.includes(value));
        setPosts(filteredPosts);
    };
    return (
        <>
            <h1>Simple Blogs</h1>
            <Search onSearchChange={onSearchChange} />
            {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))}
        </>
    );
}

export default Homepage;