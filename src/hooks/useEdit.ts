import { useState } from "react";

export const useEdit = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  return {
    edit,
    handleEdit,
  };
};
