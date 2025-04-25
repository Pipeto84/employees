import "../styles/CardLIst.css";
import { Data } from "../interfaces/index";
import { useEdit } from "../hooks/useEdit";

interface Props {
  data: Data;
}

export const CardLIst = ({ data }: Props) => {
  const { handleEdit } = useEdit();
  const onClick = () => {
    data.edit = true;
  }

  return (
    <div className="card-list">
      <p>{data.id + " - " + data.name + " ( " + data.date + " )"}</p>
      <button className="edit" onClick={onClick}>
        Edit
      </button>
    </div>
  );
};
