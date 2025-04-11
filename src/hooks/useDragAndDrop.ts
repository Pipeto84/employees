import { useState } from "react";
import { Data, Date } from "../interfaces";

export const useDragAndDrop = (initialDate: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(initialDate);

  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging);
  };

  const handleUpdateList = (id: number, date: Date) => {
    let card = listItems.find((item) => id === item.id);

    if (card && card.date !== date) {
      card.date = date;
      setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  return {
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList,
  };
};
