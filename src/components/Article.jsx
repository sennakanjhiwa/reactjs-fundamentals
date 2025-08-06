function Article(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <small>Date: {props.date}, Tags: {props.tags.join(", ")}</small>
        </>
    );
}

export default Article;