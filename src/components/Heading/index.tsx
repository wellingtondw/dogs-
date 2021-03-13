import * as S from './styles'

type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({children, ...props}: HeadingProps) => {
  return (
    <S.Title {...props}>
      {children}
    </S.Title>
  )
}

export default Heading
