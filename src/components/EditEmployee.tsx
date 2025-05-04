import React, { useEffect, useState } from "react";
import "../styles/EditEmployee.css";
import { Data } from "../interfaces/index";
import { useAppSelector } from "../app/hooks";
import {useParams} from 'react-router-dom'

export const EditEmployee = () => {
  const employees = useAppSelector((state) => state.employees);
  const params = useParams()

  const [employee, setEmployee] = useState<Data>({
    id: "",
    name: "",
    date: "",
  });

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if(params.id){
      const employeeFound = employees.find(item=>item.id === params.id);
      if(employeeFound){
        setEmployee(employeeFound)
      }
    }
  }, [params.id, employees])
  
  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Id:</label>
        <input
          name="id"
          className="inputId"
          type="text"
          value={employee.id}
          onChange={handleChangeId}
        />
        <label className="label">Name:</label>
        <input
          name="name"
          className="inputName"
          type="text"
          value={employee.name}
          onChange={handleChangeName}
        />
        <div className="buttons">
          <button className="saveButton">Save</button>
          <button className="cancelButton">Cancel</button>
        </div>
      </form>
    </div>
  );
};
