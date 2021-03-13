import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <S.Button {...props}>
      {children}
    </S.Button>
  )
}

export default Button
