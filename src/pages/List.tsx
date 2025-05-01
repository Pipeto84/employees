import "../styles/List.css";
import { CardLIst } from "../components/CardLIst";
import { EditEmployee } from "../components/EditEmployee";
import {useAppSelector} from '../app/hooks'

export const List = () => {
  
  const employeesList= useAppSelector(state=>state.employees)

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
