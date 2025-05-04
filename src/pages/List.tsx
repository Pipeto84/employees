import "../styles/List.css";
import { CardLIst } from "../components/CardLIst";
import { useAppSelector } from "../app/hooks";

export const List = () => {
  const employeesList = useAppSelector((state) => state.employees);

  return (
    <div className="list">
      <p>Employees List</p>
      <div className="employees">
        {employeesList.map((item) => (
          <CardLIst data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
