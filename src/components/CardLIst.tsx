import "../styles/CardLIst.css";
import { Data } from "../interfaces/index";

interface Props {
  data: Data;
}

export const CardLIst = ({ data }: Props) => {
  return (
    <div className="card-list">
      <p>{data.id + " - " + data.name + " ( " + data.date + " )"}</p>
    </div>
  );
};
