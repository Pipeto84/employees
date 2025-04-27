import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Data } from "../../interfaces/index";

export const initialState: Data[]=[
  {
    id: 1,
    name: 'Felipe',
    date: '',
    edit: false,
  },
  {
    id: 2,
    name: 'Juan',
    date: '',
    edit: false,
  },
  {
    id: 3,
    name: 'Mauricio',
    date: '',
    edit: false,
  },
  {
    id: 4,
    name: 'Jose',
    date: '',
    edit: false,
  },
  {
    id: 5,
    name: 'Sebastian',
    date: '',
    edit: false,
  },
  {
    id: 6,
    name: 'Marco',
    date: '',
    edit: false,
  },
  {
    id: 7,
    name: 'Rafael',
    date: '',
    edit: false,
  },
]

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    dragEmployee: (state, action: PayloadAction<Data>) => {
      const { id, date } = action.payload;
      const employeeFound = state.find((employee) => employee.id === id);
      if (employeeFound) {
        employeeFound.date = date;
      }
    },
  },
});

export const { dragEmployee } = employeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;
