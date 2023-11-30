import { useState } from "react"
import PostsList1 from "./PostsList1"
import PostsList2 from "./PostsList2"

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
            {currentpage}
        </div>
    )
}

export default DeepDive