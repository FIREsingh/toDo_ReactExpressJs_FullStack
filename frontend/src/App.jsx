import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Add from "./components/Add";
import axios from "axios";
import { BASE_URL } from "./util/constant";

function App() {
  const [data, setData] = useState([]);
  const [updataUI, setUpdataUI] = useState(false);

  useEffect(() => {
    fetchData();
  }, [updataUI]);

  const fetchData = async () => {
    const todoData = await axios.get(`${BASE_URL}/getAllTodo`);
    setData(todoData.data.data);
  };

  return (
    <div className=" border border-slate-700 p-6 rounded-3xl">
      <div className=" space-x-4 space-y-28 my-10">
        <h1>ToDo Project</h1>
        <Add setUpdataUI={setUpdataUI} />
      </div>

      {data.map((item, index) => (
        <Card
          key={item._id}
          des={item.description}
          setUpdataUI={setUpdataUI}
          id={item._id}
        />
      ))}
    </div>
  );
}

export default App;
