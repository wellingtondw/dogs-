import { all } from 'redux-saga/effects'

import feed from './feed/sagas'

export default function* rootSaga() {
  yield all([
    feed
  ])
}
