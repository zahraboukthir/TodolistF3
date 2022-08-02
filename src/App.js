import logo from "./logo.svg";
import "./App.css";
import AddList from "./Components/AddList";
import { TaskLists } from './Components/TaskLists';

function App() {
  const listTasks = [
    {
      Title: "Html",
      Date: "Mai 2022",
      isdone: true,
    },
    {
      Title: "Css",
      Date: "Mai 2022",
      isdone: true,
    },
    {
      Title: "JS",
      Date: "Juin 2022",
      isdone: true,
    },
    {
      Title: "React",
      Date: "juillet 2022",
      isdone: false,
    },
    {
      Title: "Nodejs",
      Date: "September 2022",
      isdone: false,
    },
  ];

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <AddList />
      <TaskLists data={listTasks} />
    </div>
  );
}

export default App;
