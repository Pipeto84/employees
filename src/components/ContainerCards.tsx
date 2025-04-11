import { Date, Data } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  date: Date;
  items: Data[];
}

export const ContainerCards = ({ items = [], date }: Props) => {
  return (
    <div className="layout-cards">
      <p>{date}</p>
      {items.map((item) => (
        date===item.date &&
        <CardItem data={item} key={item.id} />
      ))}
    </div>
  );
};
