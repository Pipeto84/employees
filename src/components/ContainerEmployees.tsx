import { Data } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  hanleDragging: (dragging: boolean)=> void
}

export const ContainerEmployees = ({ items = [], hanleDragging }: Props) => {
  return (
    <div className="layout-cards containerEmployees">
      <p>Employees</p>
      <div className="all">
      {items.map(
        (item) => "" === item.date && 
        <CardItem data={item} key={item.id} handleDragging={hanleDragging}/>
      )}
      </div>
    </div>
  );
};
