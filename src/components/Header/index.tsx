import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/images/dogs.svg'
import Container from '../Container'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Nav>
          <Link aria-label='inicio' to='/'>
            <Logo />
          </Link>
          <Link aria-label='inicio' to='/login'>
            Login / Criar
          </Link>
        </S.Nav>
      </Container>
    </S.Header>
  )
}

export default Header
