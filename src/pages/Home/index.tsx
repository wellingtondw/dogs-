import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
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

  console.log(items)

  return (
    <Base>
      <S.Container>
        {loading ? <p>Carregando...</p> : <p>Carregou</p>}
      </S.Container>
    </Base>
  )
}

export default Home
