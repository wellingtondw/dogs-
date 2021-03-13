import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import Input from "../../components/Input"
import Auth from "../../templates/Auth"

import * as S from './styles'

const SignIn = () => {
  return (
    <Auth>
      <S.Wrapper>
        <S.Section>
          <Heading>Login</Heading>
          <Input type='text' id='user' label='Usuário'/>
          <Input type='password' id='password' label='Senha'/>
          <Button>Entrar</Button>

          <S.RegisterBox>
            <Heading>Cadastre-se</Heading>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link to='/'>
              <Button>Cadastrar</Button>
            </Link>
          </S.RegisterBox>
        </S.Section>
      </S.Wrapper>
    </Auth>
  )
}

export default SignIn
