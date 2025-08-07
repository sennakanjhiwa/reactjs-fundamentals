import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (e) => {
        if ((e.key === "Enter")) {
            onSearchChange();
        }
    };

    return (
        <>
            <div>
                Cari artikel : 
                <input 
                onChange={(e) => setSearch(e.target.value)} 
                onKeyDown={searchKeyDown}
                type="text" /><button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemikan {props.totalPosts} data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search;