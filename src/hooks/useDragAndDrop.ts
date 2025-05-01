import { useState } from "react";
import { Date } from "../interfaces";
import { useAppDispatch } from "../app/hooks";
import { dragEmployee } from "../features/employees/employeSlice";

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useAppDispatch();
  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging);
  };

  const handleUpdateList = (id: number, date: Date) => {
    const update = {
      id,
      date,
    };
    dispatch(dragEmployee(update));
  };

  return {
    isDragging,
    handleDragging,
    handleUpdateList,
  };
};
