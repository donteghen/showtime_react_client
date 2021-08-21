//import { COLLAPSE_VIEW, EXPAND_VIEW } from "../actions/types"
import { createSlice } from '@reduxjs/toolkit'
const mobileViewSlicer = createSlice({
    name:'mobileView',
    initialState : false,
    reducers : {
        COLLAPSE_VIEW : state => state = true,
        
        EXPAND_VIEW : state => state = false
    }
})
export const {COLLAPSE_VIEW, EXPAND_VIEW, SELECT_VIEW } = mobileViewSlicer.actions
export default mobileViewSlicer.reducer
