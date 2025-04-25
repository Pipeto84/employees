import React from "react";
import "../styles/EditEmployee.css";
import { Data } from "../interfaces/index";

type editing = {
  employee: Data
}

export const EditEmployee = ({employee}: editing) => {


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const clickSave = () => {
    employee.edit=false
  }

  const clickCancel = () => {
    employee.edit=false
  }
  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Id:</label>
        <input name="id" className="inputId" type="text" value={employee.id} />
        <label className="label">Name:</label>
        <input name="name" className="inputName" type="text" value={employee.name} />
        <div className="buttons">
          <button className="saveButton" onClick={clickSave}>Save</button>
          <button className="cancelButton" onClick={clickCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
