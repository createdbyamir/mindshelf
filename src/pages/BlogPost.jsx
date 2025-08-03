import posts from "../data/posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
        return <div className="text-center py-8">Post not found.</div>;
    }

    return (
        <div>
            <Link to="/" className="button">Back to Blog</Link>
            <div className="date">
                <span className="date">{post.date}</span>
                <span className="author">By CreatedByAmir</span>
            </div>
            <div className="image">
                <img 
                    src={post.imageSrc}
                    alt={post.imageAlt}
                />
            </div>
            <h1 className="title">{post.title}</h1>
            <p>{post.abstract}</p>
        </div>
    );
}

export default BlogPost;