import { useEffect, useState } from "react"
import { TodoForm, TodoItem } from "./components"
import { TodoProvider } from "./contexts"


function App() {

    // will define the actual todos list and functions for it here
    const [todos, setTodos] = useState([])
    
    const addTodo = (todoMsg)=>{
        setTodos([{id: Date.now(), msg: todoMsg, completed: false}, ...todos])
    }

    const updateTodo = (todoId, newMsg) => {
        setTodos(todos.map((todo)=>(
            todo.id==todoId?{...todo, msg: newMsg}:todo
        )
        ))
    }

    const deleteTodo = (todoId) => {
        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=todoId))
    }

    const toggleComplete = (todoId) => {
        // setTodos(todos.map((todo)=>(
        //     todo.id==todoId?{...todo, completed: !todo.completed}:todo
        // )
        // ))

        // will move the completed todo to last
        // getting its data
        let msg, completed
        for(let todo of todos)
        {
            if(todo.id==todoId)
            {
                msg=todo.msg
                completed=todo.completed
                break
            }
        }
        // now delete it
        deleteTodo(todoId)
        // add it to last
        setTodos((prevTodos)=>[...prevTodos, {id:todoId, msg, completed:!completed}])
    }

    // retrieving from localStorage on page load
    useEffect(()=>{
        console.log("useEffect to get from localStorage1")
        const myTodos=(JSON.parse(localStorage.getItem("todos")))
        
        if(myTodos && myTodos.length>0)
        {
            console.log("useEffect to get from localStorage2")
            setTodos(myTodos)
            console.log("useEffect to get from localStorage3")
            console.log(myTodos)
        }
    }, [])

    // saving to localStorage upon update
    useEffect(()=>{
        console.log("useEffect to set in localStorage1")
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log("useEffect to set in localStorage2")
    }, [todos])


    return (
        <>
            <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

                <div className="bg-[#172842] min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                        <div className="mb-4">
                            <TodoForm />
                        </div>
                        <div className="flex flex-wrap gap-y-3">
                            
                            {/* need to put an array of jsx here */}
                            {/* doing it with map */}
                            {todos.map((todo)=>{
                                return(
                                    <TodoItem key={todo.id} todo={todo} />
                                )
                            })}

                        </div>
                    </div>
                </div>

            </TodoProvider>
        </>
    )
}

export default App
