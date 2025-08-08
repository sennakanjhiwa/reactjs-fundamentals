import Article from "../components/Article";
import dataPosts from "../posts.json";
import Search from "../components/Search";
import { useState, useEffect } from "react";

function Homepage() {
    const [posts, setPosts] = useState(dataPosts);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = dataPosts.filter(item => item.title.includes(value));
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setExternalPosts(json));
    }, []);

    useEffect(() => {
        console.log("ada perubahan post baru");
    }, [posts]);

    return (
        <>
            <h1>Simple Blogs</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))}
            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))}
        </>
    );
}

export default Homepage;