import { useState } from "react"
import PostsList1 from "./use_queries/PostsList1"
import PostsList2 from "./use_queries/PostsList2"
import FirstPost from "./use_queries/FirstPost"
import AddPost from "./mutation/AddPost"

function DeepDive(){
    const [currentpage, setCurrentPage] = useState(<PostsList1 />)

    return (
        <div>
            <button onClick={() => setCurrentPage(<PostsList1 />)}>
                Posts List 1
            </button>
            <button onClick={() => setCurrentPage(<PostsList2 />)}>
                Posts List 2
            </button>
            <button onClick={() => setCurrentPage(<FirstPost id={1} />)}>
                First Post
            </button>
            <button onClick={() => setCurrentPage(<AddPost setCurrentPage={setCurrentPage} />)}>
                Add Post
            </button>
            {currentpage}
        </div>
    )
}

export default DeepDive