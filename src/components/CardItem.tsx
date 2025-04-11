import { Data } from "../interfaces";

interface Props {
  data: Data;
}

export const CardItem = ({data}:Props) => {
  return (
    <div className="card-container">
      <p>{data.name}</p>
    </div>
  );
};
