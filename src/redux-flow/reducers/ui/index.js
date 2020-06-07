'use strict'

import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from './actions'
import createReducer from '../create-reducer'

const initialState = {
  isRegisterVideoFormOpened: false
}

const ui = createReducer(initialState, {
  [OPEN_REGISTER_VIDEO]: (state, action) => ({
    ...state,
    isRegisterVideoFormOpened: true
  }),

  [CLOSE_REGISTER_VIDEO]: (state, action) => ({
    ...state,
    isRegisterVideoFormOpened: false
  })
})

export default ui
