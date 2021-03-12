import { Reducer } from 'redux'
import { ActionTypes, IFeedState } from './types'

const INITIAL_STATE: IFeedState = {
  items: [],
  loading: true,
}

const feed: Reducer<IFeedState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ActionTypes.getFeedListSuccess: {
      return {
        ...state,
        items: action.payload.data,
        loading: false
      }
    }
    case ActionTypes.getFeedListFailure: {
      const { error } = action.payload
      return {
        ...state,
        loading: false,
        error
      }
    }
    default: {
      return state
    }
  }
}

export default feed
