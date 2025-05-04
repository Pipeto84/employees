import "../styles/CardLIst.css";
import { Data } from "../interfaces/index";
import {Link} from 'react-router-dom'

interface Props {
  data: Data;
}

export const CardLIst = ({ data }: Props) => {

  return (
    <div className="card-list">
      <p>{data.alias + " - " + data.name + " ( " + data.date + " )"}</p>
      <Link className="edit" to={`/edit/${data.id}`}>
        Edit
      </Link>
    </div>
  );
};
