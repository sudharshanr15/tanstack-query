import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import getPost from "./api/getPost"
import getUser from "./api/getUser"

function FirstPost({ id }){
    const postQuery = useQuery({
        queryKey: ["posts", id],
        queryFn: () => getPost(id)
    })

    const userQuery = useQuery({
        queryKey: ["users", postQuery?.data?.userId],
        queryFn: () => getUser(postQuery?.data?.userId),
        enabled: postQuery?.data?.userId !== null
    })

    if(postQuery.isLoading) return <h1>Loading...</h1>
    if(postQuery.isError) return <h1>Error!</h1>

    return (
        <div>
            <h1>
                {postQuery.data.id}. {postQuery.data.title}<br/>
                <small>{userQuery.isLoading ? "Loading..." : userQuery.isError ? "Error" : userQuery.data.name}</small>
            </h1>

            <p>{postQuery.data.body}</p>
        </div>
    )
}

export default FirstPost