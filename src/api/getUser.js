function getUser(){
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
}

export default getUser