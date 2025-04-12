import { Date } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { ContainerEmployees } from "./ContainerEmployees";
import { employeesList } from "../assets";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import "../styles/DragAndDrop.css"

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
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(employeesList);
  return (
    <>
      <div className="employees">
        <ContainerEmployees
          items={listItems}
          hanleDragging={handleDragging}
          hanleUpdateList={handleUpdateList}
        />
      </div>
      <div className="grid">
        {dayWork.map((container) => (
          <ContainerCards
            date={container}
            key={container}
            items={listItems}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))}
      </div>
    </>
  );
};
