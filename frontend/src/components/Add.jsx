import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../util/constant";
import toast from "react-hot-toast";

export default function Add({ setUpdataUI }) {
  const [data, setData] = useState({
    description: "",
  });

  function changeHandler(event) {
    setData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  }
  //add button handler
  async function clickHandler(event) {
    await axios.post(`${BASE_URL}/create`, data);
    setUpdataUI((preState) => !preState);
    setData({ description: "" });
    console.log("added");
    toast.success("Added successfully");
  }

  return (
    <div className=" space-x-3">
      <input
        onChange={changeHandler}
        type="text"
        value={data.description}
        name="description"
        placeholder="Add todo...."
        className=" h-12 p-4  rounded-lg "
      />
      <button onClick={clickHandler} className=" to-blue-400 font-semibold">
        Add
      </button>
    </div>
  );
}
