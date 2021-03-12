import {ActionTypes, IFeedItem} from './types'

export const getFeedListRequest = () => {
  return {
    type: ActionTypes.getFeedListRequest
  }
}

export const getFeedListSuccess = (data: IFeedItem[]) => {
  return {
    type: ActionTypes.getFeedListSuccess,
    payload: {
      data
    }
  }
}


export const getFeedListFailure = (error: Error) => {
  return {
    type: ActionTypes.getFeedListFailure,
    payload: {
      error
    }
  }
}
