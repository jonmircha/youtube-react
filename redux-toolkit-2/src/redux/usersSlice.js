import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    fetchUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
