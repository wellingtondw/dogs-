import styled from 'styled-components'

import { Wrapper as InputWrapper } from '../../components/Input/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;
`

export const Section = styled.section`
  width: 100%;
  max-width: 44.8rem;

  > h2 {
    margin-bottom: 3.2rem;
  }

  ${InputWrapper} {
    margin-bottom: 2.0rem;
  }
`

export const RegisterBox = styled.div`

  > h2 {
    margin-top: 8rem;
  }

  > p {
    margin-top: 2.8rem;
    font-size: 2.0rem;
    color: #333;
    margin-bottom: 1.6rem;
  }
`
