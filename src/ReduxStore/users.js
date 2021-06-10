import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users:[ {
        firstName:'Mike',
        lastName:'Ross',
        userName:'Mross'
    },
    {
        firstName:'sike',
        lastName:'Toss',
        userName:'Stoss'
    },
    {
        firstName:'hike',
        lastName:'koss',
        userName:'Hkoss'
    }],
    activeUserIndex:undefined
  },
  reducers: {
    addUser: (state,action) => {
      let user=action.payload.user
      state.users.push(user)
      return state;
    },
    updateUser: (state,action) => {
      let user=action.payload.user;
      state.users[state.activeUserIndex]=user;
      return state;
    },
    deleteUser: (state) => {
      let id=state.activeUserIndex;
      state.users.splice(id,1);
      state.activeUserIndex=undefined;
    },
    setActiveUserIndex:(state,action)=>{
        let id=action.payload.id;
        state.activeUserIndex=id;
        return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser,setActiveUserIndex } = usersSlice.actions

export default usersSlice.reducer