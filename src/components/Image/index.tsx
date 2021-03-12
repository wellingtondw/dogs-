import { SyntheticEvent, useState } from 'react'
import * as S from './styles'

const Image = ({ ...props }) => {
  const [showSkeleton, setShowSkeleton] = useState(true)

  return (
    <>
      {showSkeleton && <S.Skeleton />}
      <S.Image onLoad={() => setShowSkeleton(false)} showSkeleton={showSkeleton} {...props}/>
    </>
  )
}

export default Image
