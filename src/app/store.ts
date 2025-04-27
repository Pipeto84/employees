import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employees/employeSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDisPatch = AppStore["dispatch"];
