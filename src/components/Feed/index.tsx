import { useCallback, useState } from 'react'
import { IFeedItem } from '../../store/modules/feed/types'
import Image from '../Image'
import * as S from './styles'

export type FeedProps = {
  items: IFeedItem[]
  loading: boolean;
}

const Feed = ({ items, loading }: FeedProps) => {

  const handleRenderFeed = useCallback(() => {
    if(loading) {
      return <p>Carregando...</p>
    }

    let arrayItems = [2]

    return (
      items.map((item, index) => {
        const isFull = arrayItems.find(el => el === (index + 1))

        if(!!isFull) {
          arrayItems = [...arrayItems, arrayItems[arrayItems.length - 1] + 6]
        }

        return (
          <S.ListItem key={index} isFull={!!isFull}>
            <Image src={item.src} alt={item.title}/>
          </S.ListItem>
        )
      })
    )
  }, [loading])

  return (
    <S.Wrapper>
      <ul>
        {handleRenderFeed()}
      </ul>
    </S.Wrapper>
  )
}

export default Feed
