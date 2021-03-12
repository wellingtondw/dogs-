import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api'
import { getFeedListFailure, getFeedListSuccess } from './actions'
import { ActionTypes, IFeedItem } from './types'

function* getFeedList() {
  try {
    const { data }: AxiosResponse<IFeedItem[]> = yield call(api.get, '/api/photo')

    yield put(getFeedListSuccess(data))
  }catch(error) {
    yield put(getFeedListFailure(error.response.data))
  }
}

export default all([
  takeLatest(ActionTypes.getFeedListRequest, getFeedList)
])
