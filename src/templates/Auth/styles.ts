import styled from 'styled-components'
import BackgroundImage from '../../assets/images/login.jpg'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding-top: 6.4rem;
  min-height: 100vh;
`

export const LeftSection = styled.section`
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
`

export const RightSection = styled.section``
