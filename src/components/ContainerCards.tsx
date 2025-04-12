import React from "react";
import { Date, Data } from "../interfaces";
import { CardItem } from "./CardItem";
import "../styles/ContainerCards.css";

interface Props {
  date: Date;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, date: Date) => void;
}

export const ContainerCards = ({
  items = [],
  date,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), date);
    handleDragging(false);
  };

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{date}</p>
      {items.map(
        (item) =>
          date === item.date && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
            />
          )
      )}
    </div>
  );
};
