const ArticleStatus = ({isNew}) => {
    return isNew && <span>--Baru</span>;
};

const NewArticle = () => {
    return <span> --Baru</span>;
};

function Article(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <small>
                Date: {props.date}, Tags: {props.tags.join(", ")}{" "}
                <ArticleStatus isNew={props.isNew} />
                {props.isNew && <NewArticle />}
            </small>
        </>
    );
}

export default Article;