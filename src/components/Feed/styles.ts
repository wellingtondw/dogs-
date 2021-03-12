import styled, { css } from 'styled-components'

type ListItemProps = {
  isFull: boolean;
}

export const Wrapper = styled.ul`
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.6rem;
      gap: 1.6rem;
      justify-items: center;
    }
`

export const ListItem = styled.li<ListItemProps>`
  ${({ isFull }) => css`
    position: relative;
    ${isFull && css`
      grid-column: 2 / 4;
      grid-row: span 2;
    `}
  `}
`

