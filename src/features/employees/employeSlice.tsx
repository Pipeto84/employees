import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Data, Date } from "../../interfaces/index";

type idData = {
  id: string;
  name: string;
  date: Date;
};

export const initialState: Data[] = [
  {
    id: "1",
    name: "Felipe",
    date: "",
  },
  {
    id: "2",
    name: "Juan",
    date: "",
  },
  {
    id: "3",
    name: "Mauricio",
    date: "",
  },
  {
    id: "4",
    name: "Jose",
    date: "",
  },
  {
    id: "5",
    name: "Sebastian",
    date: "",
  },
  {
    id: "6",
    name: "Marco",
    date: "",
  },
  {
    id: "7",
    name: "Rafael",
    date: "",
  },
];

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    dragEmployee: (state, action: PayloadAction<idData>) => {
      const { id, date } = action.payload;
      const employeeFound = state.find((employee) => employee.id === id);
      if (employeeFound) {
        employeeFound.date = date;
      }
    },
    editingEmployee: (state, action: PayloadAction<idData>) => {
      const { id, name } = action.payload;
      const employeeFound = state.find((employee) => employee.id === id);
      if (employeeFound) {
        employeeFound.id = id;
        employeeFound.name = name;
      }
    },
  },
});

export const { dragEmployee, editingEmployee } = employeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;
