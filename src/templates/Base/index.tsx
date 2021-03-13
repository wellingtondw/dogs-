import Footer from "../../components/Footer"
import Header from "../../components/Header"
import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode;
  hasPadding?: boolean
}


const Base = ({ children, hasPadding = true }: BaseProps) => {
  return (
    <S.Wrapper hasPadding={hasPadding}>
      <Header />
      {children}
      <Footer/>
    </S.Wrapper>
  )
}

export default Base
