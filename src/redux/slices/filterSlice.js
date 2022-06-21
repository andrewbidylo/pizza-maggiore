import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: "popular", sortProperty: "raiting"
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
    setCurrentPage:(state, action)=> {
      state.currentPage=action.payload
    },
    setFilters:(state, action)=> {
      state.sortType=action.payload.sortType
      state.currentPage= Number(action.payload.currentPage)
      state.categoryId= Number(action.payload.categoryId)
    }
  },
})

export const selectFilters = state => state.filters

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer