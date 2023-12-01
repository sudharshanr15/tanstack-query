function addPost({title, body}){
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
}

export default addPost