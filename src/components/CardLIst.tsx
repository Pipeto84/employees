import "../styles/CardLIst.css";
import { Data } from "../interfaces/index";

interface Props {
  data: Data;
}

export const CardLIst = ({ data }: Props) => {
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
