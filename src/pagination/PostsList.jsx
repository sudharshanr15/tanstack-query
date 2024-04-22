import { useEffect } from "react"
import allPosts from "../api/allPosts"
import { useQuery } from "@tanstack/react-query";

function PostsList(){
    const postsQuery = useQuery({
        queryKey: ["posts"],
        queryFn: allPosts
    })

    if(postsQuery.isLoading) return <h1>Loading...</h1>
    if(postsQuery.isError) return <h1>Error</h1>

    return <div>
        <h1>Post List Paginated</h1>
        {postsQuery.data.map(post => (
            <div>
                <p>{post.id}. {post.title}</p>
            </div>
        ))}
    </div>
}

export default PostsList