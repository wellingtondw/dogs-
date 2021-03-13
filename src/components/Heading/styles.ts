import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Spectral', Georgia;
  line-height: 1;
  font-size: 4.8rem;
  margin: 1.6rem 0;
  position: relative;
  z-index: 1;
  color: #333;

  &::after {
    content: '';
    display: block;
    width: 2.0rem;
    height: 2.0rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.4rem;
    z-index: -1;
  }
`
