import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {employeesList} from '../../assets/index';

export const employeeSlice = createSlice({
  name: "employees",
  initialState: employeesList,
  reducers: {

  }
})

export const {} = employeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;