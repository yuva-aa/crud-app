import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, firstname, lastname, email, phone, address, State, country, zipcode  } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.firstname = firstname;
        existingUser.lastname = lastname;
        existingUser.email = email;
        existingUser.phone = phone;
        existingUser.address = address;
        existingUser.State = State;
        existingUser.country = country;
        existingUser.zipcode = zipcode;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
})

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;