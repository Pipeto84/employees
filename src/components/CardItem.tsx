import React from "react";
import { Data, Date } from "../interfaces";
import "../styles/CardItem.css"

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, date: Date) => void;
}

export const CardItem = ({ data, handleDragging,handleUpdateList }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  const handleOnClick = () => {
    handleUpdateList(data.id, "")
  };

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <p>{data.name}</p>
      <button className="cancel" onClick={handleOnClick}>
        X
      </button>
    </div>
  );
};
