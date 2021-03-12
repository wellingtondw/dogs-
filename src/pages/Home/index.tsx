import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Feed from "../../components/Feed"
import { getFeedListRequest } from "../../store/modules/feed/actions"
import { IFeedState } from "../../store/modules/feed/types"
import { IState } from "../../store/types"
import Base from "../../templates/Base"

import * as S from './styles'

const Home = () => {
  const { items, loading, error } = useSelector<IState, IFeedState>(state => state.feed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedListRequest())
  }, [])

  return (
    <Base>
      <S.Container>
        <Feed items={[...items, ...items, ...items, ...items, ...items, ...items, ...items]} loading={loading}/>
      </S.Container>
    </Base>
  )
}

export default Home
