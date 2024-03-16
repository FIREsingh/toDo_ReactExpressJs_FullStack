import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../util/constant";
import { IoTrashBinSharp } from "react-icons/io5";
import { PiNotePencilFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";

export default function Card({ des, setUpdataUI, id }) {
  const [editing, setEditing] = useState(false);
  const [inputData, setInputData] = useState("");

  const [updateData, setUpdateData] = useState({
    description: "",
  });

  async function deleteClickHandler() {
    await axios.delete(`${BASE_URL}/delete/${id}`);
    setUpdataUI((preState) => !preState);
    toast.error("deleted successfully");
  }
  async function editClickHandler(e) {
    setEditing((preState) => !preState);
    await axios.put(`${BASE_URL}/update/${id}`, {
      description: inputData,
    });
    setUpdataUI((preState) => !preState);
    editing ? toast.success("Updated successfully") : "";
    setInputData(des);
  }

  function changeHandler(event) {
    setInputData(event.target.value);
  }

  return (
    <div className=" border border-slate-600 rounded-xl shadow-2xl space-x-8 flex justify-between align-middle items-center p-4 m-2 ">
      {editing ? (
        <input
          type="text"
          className=" p-3 rounded-lg"
          name="description"
          value={inputData}
          onChange={changeHandler}
        />
      ) : (
        <div>{des}</div>
      )}

      <div className=" space-x-2">
        <button onClick={editClickHandler}>
          {editing ? (
            <TiTick className=" text-2xl" />
          ) : (
            <PiNotePencilFill className=" text-2xl" />
          )}
        </button>
        <button onClick={deleteClickHandler}>
          <IoTrashBinSharp className=" text-2xl" />
        </button>
      </div>
    </div>
  );
}
