import styled from 'styled-components'
import Ct from '../../components/Container'

import { Wrapper } from '../../components/Loading/styles'

export const Container = styled(Ct)`
  height: 100%;

  ${Wrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
`
