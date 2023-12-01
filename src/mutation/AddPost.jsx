import { useEffect, useRef } from "react"
import addPost from "../api/addPost"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import FirstPost from "../use_queries/FirstPost"

function AddPost({ setCurrentPage }){

    const title = useRef()
    const body = useRef()

    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
        mutationFn: addPost,
        onSuccess: (data) => {
            queryClient.setQueryData(["posts", data.id], data)
            queryClient.invalidateQueries(["posts"], {exact: true})
            setCurrentPage(<FirstPost id={data.id} />)
        }
    })

    function handleSubmit(e){
        e.preventDefault()
        createPostMutation.mutate({
            title: title.current.value,
            body: body.current.value
        })
    }

    return <div>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={title} />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input type="text" id="body" ref={body} />
            </div>
            <button disabled={createPostMutation.isPending}>{createPostMutation.isPending ? "Loading..." : "Create"}</button>
        </form>
    </div>
}

export default AddPost