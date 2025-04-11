import { Date } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { ContainerEmployees } from "./ContainerEmployees";
import { employeesList } from "../assets";

const dayWork: Date[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  // "Saturday",
  // "Sunday",
];

export const DragAndDrop = () => {
  return (
    <>
      <div className="employees">
        <ContainerEmployees />
      </div>
      <div className="grid">
        {dayWork.map((container) => (
          <ContainerCards date={container} key={container} items={employeesList}/>
        ))}
      </div>
    </>
  );
};
