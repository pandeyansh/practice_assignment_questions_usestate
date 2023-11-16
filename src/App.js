import Counter from "./components/Counter";
import InputValidation from "./components/InputValidation";
import ToDoList from "./components/ToDoList";
import ToogleComponent from "./components/ToogleComponent";
import UserRegistration from "./components/UserRegistration";
function App() {
  return (
    <div>
     <Counter />
     <ToogleComponent />
     <ToDoList />
     <InputValidation />
     <UserRegistration />
    </div>
  );
}
export default App;