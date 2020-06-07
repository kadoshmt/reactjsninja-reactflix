'use strict'

import { SELECT_VIDEO_SINGLE } from './actions'
import createReducer from '../create-reducer'

const initialState = ''

const videoSingle = createReducer(initialState, {
  [SELECT_VIDEO_SINGLE]: (state, action) => action.payload.id
})

export default videoSingle
