import { InputHTMLAttributes, useState } from "react"
import * as S from './styles'

type InputProps = {
  label?: string;
  id: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, id, onInput, ...props }: InputProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...props} onChange={onChange} value={value}/>
    </S.Wrapper>
  )
}

export default Input
