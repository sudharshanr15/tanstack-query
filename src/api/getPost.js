async function getPost(id){
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(res => res.json())
}

export default getPost