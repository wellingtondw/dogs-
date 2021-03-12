import Container from '../Container'
import { ReactComponent as Logo } from '../../assets/images/dogs.svg'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <Container>
        <Logo />
        <p>Pets. Alguns direitos reservados.</p>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
