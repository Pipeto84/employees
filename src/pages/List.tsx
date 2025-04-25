import "../styles/List.css";
import { CardLIst } from "../components/CardLIst";
import { employeesList } from "../assets/index";
import { EditEmployee } from "../components/EditEmployee";
import { useEffect } from "react";

export const List = () => {
  useEffect(() => {
    console.log(employeesList)
  }, [employeesList])
  
  return (
    <div className="list">
      <p>Employees List</p>
      <div className="employees">
        {employeesList.map((item) => (
          <CardLIst data={item} key={item.id} />
        ))}
      </div>
      {
        employeesList.map(item=>(
          item.edit && (
          <EditEmployee employee={item} key={item.id}/>
          )
        ))
      }
    </div>
  );
};
