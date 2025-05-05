import "../styles/CardLIst.css";
import { Data } from "../interfaces/index";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { deleteEmployee } from "../features/employees/employeSlice";

interface Props {
  data: Data;
}

export const CardLIst = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const handleDelete = (employee: Data) => {
    dispatch(deleteEmployee(employee));
  };
  return (
    <div className="card-list">
      <p>{data.alias + " - " + data.name + " ( " + data.date + " )"}</p>
      <div className="buttonsList">
        <Link className="edit" to={`/edit/${data.id}`}>
          Edit
        </Link>
        <button className="delete" onClick={() => handleDelete(data)}>
          Delete
        </button>
      </div>
    </div>
  );
};
