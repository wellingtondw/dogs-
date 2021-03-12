import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Feed from "../../components/Feed"
import Loading from "../../components/Loading"
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

  if(error) {
    return <p>Erro</p>
  }

  return (
    <Base>
      <S.Container>
        {loading
          ? <Loading />
          : <Feed items={[...items, ...items, ...items, ...items, ...items, ...items, ...items]} />
        }
      </S.Container>
    </Base>
  )
}

export default Home
