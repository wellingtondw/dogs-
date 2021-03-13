import Input from "../../components/Input"
import Auth from "../../templates/Auth"

import * as S from './styles'

const SignIn = () => {
  return (
    <Auth>
      <S.Wrapper>
        <Input type='text' id='text' label='Usuário'/>
      </S.Wrapper>
    </Auth>
  )
}

export default SignIn
