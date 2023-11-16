import { useState } from "react";
function ToDoList () {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addToDo = ()=>{
        if (inputValue.trim() !==''){
            setTodos([...todos,inputValue]);
            setInputValue('');
        }
    };
    const deleteToDo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };
    return (
        <div>
            <h1>To Do List</h1>
            <input
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder="Enter your work"
            />
            <button onClick={addToDo}>ADD</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={()=>deleteToDo(index)}>DELETE</button>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                div {
                    text-align: center;
                }
                h1 {
                    font-size: 24px;
                }
                input {
                    margin: 10px 0;
                    padding: 5px;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 5px 0;
                }
                button {
                    background-color: #ff0000;
                    color: #fff;
                    border: none;
                    padding: 5px 10px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #cc0000;
                }
            `}
            </style>
        </div>
    );
}
export default ToDoList;
// import React, { useState } from 'react';
// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };
//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };
//   const removeTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//             {task.text}
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskCompletion(index)}
//             />
//             <button onClick={() => removeTask(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="New Task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//     </div>
//   );
// };
// export default TodoList;