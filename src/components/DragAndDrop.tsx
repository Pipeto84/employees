import { Date } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { ContainerEmployees } from "./ContainerEmployees";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import "../styles/DragAndDrop.css";
import { useAppSelector } from "../app/hooks";
import { employeesList } from '../assets/index'
import { useEffect } from "react";

const dayWork: Date[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const DragAndDrop = () => {
  const employees = useAppSelector((state) => state.employees);
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(employeesList);
    
  return (
    <>
      <div className="titleSheduling flex">
        <h1 className="titleFont">Scheduling Employees</h1>
      </div>
      <div className="employees">
        <ContainerEmployees
          items={employees}
          hanleDragging={handleDragging}
          hanleUpdateList={handleUpdateList}
        />
      </div>
      <div className="grid">
        {dayWork.map((container) => (
          <ContainerCards
            date={container}
            key={container}
            items={employees}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))}
      </div>
    </>
  );
};
