import Footer from "../../components/Footer"
import Header from "../../components/Header"
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode;
}


const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
      <Footer/>
    </S.Wrapper>
  )
}

export default Base
