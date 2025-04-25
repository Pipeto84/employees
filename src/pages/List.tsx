import "../styles/List.css";
import { CardLIst } from "../components/CardLIst";
import { employeesList } from "../assets/index";

export const List = () => {
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
