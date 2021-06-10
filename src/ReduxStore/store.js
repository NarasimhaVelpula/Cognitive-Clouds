import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users'
export default configureStore({
  reducer: {
      users:usersSlice
  },
})