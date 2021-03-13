import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from '../../assets/images/login.jpg'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding-top: 6.4rem;
  min-height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  `}
`

export const LeftSection = styled.section`
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const RightSection = styled.section``
