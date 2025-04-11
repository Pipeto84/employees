import { Data } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
}

export const ContainerEmployees = ({ items = [] }: Props) => {
  return (
    <div className="layout-cards containerEmployees">
      <p>Employees</p>
      <div className="all">
      {items.map(
        (item) => "" === item.date && 
        <CardItem data={item} key={item.id} />
      )}
      </div>
    </div>
  );
};
