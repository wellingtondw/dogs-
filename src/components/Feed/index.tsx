import { useCallback, useState } from 'react'
import { IFeedItem } from '../../store/modules/feed/types'
import * as S from './styles'

export type FeedProps = {
  items: IFeedItem[]
}

const Feed = ({ items }: FeedProps) => {

  const handleRenderFeed = useCallback(() => {
    let arrayItems = [2]

    return (
      items.map((item, index) => {
        const isFull = arrayItems.find(el => el === (index + 1))

        if(!!isFull) {
          arrayItems = [...arrayItems, arrayItems[arrayItems.length - 1] + 6]
        }

        return (
          <S.ListItem key={index} isFull={!!isFull}>
            <S.Image src={item.src}/>
          </S.ListItem>
        )
      })
    )
  }, [])

  return (
    <S.Wrapper>
      <ul>
        {handleRenderFeed()}
      </ul>
    </S.Wrapper>
  )
}

export default Feed
