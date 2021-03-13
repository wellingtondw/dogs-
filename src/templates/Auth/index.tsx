import Base from '../Base'
import * as S from './styles'

type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => {
  return (
    <Base hasPadding={false}>
      <S.Wrapper>
        <S.LeftSection />
        <S.RightSection>
          {children}
        </S.RightSection>
      </S.Wrapper>
    </Base>
  )
}

export default Auth
