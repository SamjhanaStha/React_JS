import useFetch from "./my_custom_hook"

const TodoExample = ()=>{
    // Using the custom hook to fetch todos from API 
    const [todos, setTodos] = useFetch("https://jsonplaceholder.typicode.com/todos")
    return(
        <div>
            <h1>All Todos:</h1>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <p key={todo.id}>{todo.title}</p>
                        )
                    }
                )
            }
        </div>
    )
}

export default TodoExample