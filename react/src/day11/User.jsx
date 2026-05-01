import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const UserDetails = () => {
    let { id } = useParams()
    let navigator = useNavigate()
    let handleGoTohome = () => {
        // navigation and send data to other page
        navigator("/", { state: id })
    }

    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let users = await response.json()
            console.log("Users: ", users)
            setUsers(users)
        } catch (e) {
            console.log("Error: ", e)
            alert("Something went worng")
        } finally {
            console.log("Finally called")
        }
    }

    useEffect(
        () => {
            fetchUser();
        },
        []
    )

    let postOption ={ 
        method: 'POST',
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    }

    const addNewPost = async() => {
        let myPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            ...postOption,
            body: JSON.stringify(myPost),
        })
        let data= await res.json()
        console.log("after added new post", data)
    }

    let putOption ={ 
        method: 'PUT',
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    }

    const updatePost = async() => {
        let myPost = {
            id: 2,
            title: 'updated foo',
            body: 'updated this is foo body',
            userId: 1,
        }
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
            ...putOption,
            body: JSON.stringify(myPost),
        })
        let data= await res.json()
        console.log("after added new post", data)
    }

    return (
        <div>
            <h3>User Details</h3>
            <button onClick={addNewPost}>Add Post</button>
            <button onClick={updatePost}>Update Post</button>
            <p>Params Id. :{id}</p>
            <button onClick={handleGoTohome}>Go to Home</button>
            <h1>All users: </h1>
            {
                (users && users.length > 0) || <p>User not found</p>
            }
            {
                users && users.map(
                    (u) => {
                        return (
                            <p key={u.id}>{u.name}, {u.email}</p>
                        )
                    }
                )
            }
        </div>
    )
}

export default UserDetails