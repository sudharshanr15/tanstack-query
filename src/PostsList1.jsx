import { useQuery, useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import posts from "./api/posts"

const POSTS = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, sequi."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing."
    }
]

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorId=1 => ["posts", {authorId: 1}]
// /posts/2/comments => ["posts", post.id, "comments"]

function PostsList1(){
    const postsQuery = useQuery({
        queryKey: ["post1"],
        queryFn: posts,
        staleTime: 1000 * 100,
    })

    if(postsQuery.isLoading) return <h1>Loading...</h1>
    if(postsQuery.isError) return <h1>Error</h1>

    return (
        <div>
            <h1>Posts List 1</h1>
            {postsQuery.data.map((post) => (
                <div key={post.id}>
                    {post.id}. {post.title}
                </div>
            ))}
        </div>
    )
}

function wait(duration){
    return new Promise((resolve) => setTimeout(resolve, duration))
}

export default PostsList1