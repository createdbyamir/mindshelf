import posts from "../data/posts";
import PostCard from "../components/PostCard";
import Search from "../components/Search";
import { useState } from 'react';

function BlogFeed() {

    const [ query, setQuery ] = useState("");
    const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
    );


    return (
        <>
            <Search query={query} setQuery={setQuery} />

            {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-500 py-4">No posts found</div>
            ) : (
            <div className="flex flex-wrap items-center max-w-3xl mx-auto py-8 px-4">
                {filteredPosts.map((post) => (
                <PostCard
                    key={post.id}
                    imageSrc={post.imageSrc}
                    imageAlt={post.imageAlt}
                    title={post.title}
                    abstract={post.abstract}
                    date={post.date}
                    slug={post.slug}
                />
                ))}
            </div>
            )}
        </>
    );

}

export default BlogFeed;
