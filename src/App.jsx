/* eslint-disable react/prop-types */
import { useState } from "react";

export function FormTodo({ addTodo }){
    const [todo, setTodo] = useState("");

    const submit = e => {
        //mencegah browser refresh
        e.preventDefault();

        //menambahkan todo ke paling list todo paling akhir
        addTodo(todo)

        //reset form todo
        setTodo('')
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} required/>
            <button type="submit">Submit</button>
        </form>
    );
}

export function Todo({ deleteTodo, index, todo }){
    return (
        <li>
            <a>
                { todo }
            </a>
            <a 
                onClick={() => deleteTodo(index)}
            >
                Delete
            </a>
        </li>
    );
}

export function Todos({ deleteTodo, todos }){
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <Todo deleteTodo={deleteTodo} key={index} index={index} todo={todo} />
                ))
            }
        </ul>
    );
}

export default function App(){
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (deleteIndex) => {
        const newTodos = todos.filter((todo, index) => index !== deleteIndex);
        console.log(newTodos);
        setTodos(newTodos);
    }

    return (
        <>
            <FormTodo addTodo={addTodo}/>
            <Todos deleteTodo={deleteTodo} todos={todos}/>
        </>
    );
}