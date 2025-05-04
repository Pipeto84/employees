import React, { useEffect, useState } from "react";
import "../styles/EditEmployee.css";
import { Data } from "../interfaces/index";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { editingEmployee } from "../features/employees/employeSlice";

export const EditEmployee = () => {
  const employees = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Data>({
    id: "",
    name: "",
    date: "",
  });
  const [canceled, setCanceled] = useState(false);

  // const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmployee({
  //     ...employee,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (params.id) {
      if (!canceled) {
        dispatch(editingEmployee(employee));
      }
    }
    navigate("/list");
  };
  const handleCancel = () => {
    setCanceled(true);
  };
  const handleSave = () => {
    setCanceled(false);
  };

  useEffect(() => {
    if (params.id) {
      const employeeFound = employees.find((item) => item.id === params.id);
      if (employeeFound) {
        setEmployee(employeeFound);
      }
    }
  }, [params.id, employees]);

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Id:</label>
        {/* <input
          name="id"
          className="inputId"
          type="text"
          value={employee.id}
          onChange={handleChangeId}
        /> */}
        <label className="label">Name:</label>
        <input
          name="name"
          className="inputName"
          type="text"
          value={employee.name}
          onChange={handleChangeName}
        />
        <div className="buttons">
          <button className="saveButton" onClick={handleSave}>
            Save
          </button>
          <button className="cancelButton" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
