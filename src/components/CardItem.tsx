import React from "react";
import { Data } from "../interfaces";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  const handleOnClick = ()=>{
    data.date=""
  }

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <p>{data.name}</p>
      <button className="cancel" onClick={handleOnClick}>X</button>
    </div>
  );
};
