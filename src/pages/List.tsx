import "../styles/List.css";
import { CardLIst } from "../components/CardLIst";
import { employeesList } from "../assets/index";
import { useEdit } from "../hooks/useEdit";
import { EditEmployee } from "../components/EditEmployee";

export const List = () => {

  return (
    <div className="list">
      <p>Employees List</p>
      <div className="employees">
        {employeesList.map((item) => (
          <CardLIst data={item} key={item.id} />
        ))}
      </div>
      <EditEmployee />
    </div>
  );
};
