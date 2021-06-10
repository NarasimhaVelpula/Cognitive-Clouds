import { configureStore } from 'react-redux'
import usersSlice from './users'
export default configureStore({
  reducer: {
      users:usersSlice
  },
})