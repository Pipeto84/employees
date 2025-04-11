import { Data, Date } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  hanleDragging: (dragging: boolean) => void;
  hanleUpdateList: (id: number, date: Date) => void;
}

export const ContainerEmployees = ({
  items = [],
  hanleDragging,
  hanleUpdateList,
}: Props) => {
  return (
    <div className="layout-cards containerEmployees">
      <p>Employees</p>
      <div className="all">
        {items.map(
          (item) =>
            "" === item.date && (
              <CardItem
                data={item}
                key={item.id}
                handleDragging={hanleDragging}
                handleUpdateList={hanleUpdateList}
              />
            )
        )}
      </div>
    </div>
  );
};
