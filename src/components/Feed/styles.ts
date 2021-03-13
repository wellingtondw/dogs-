import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

      ${media.lessThan('medium')`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.8rem;
        gap: 0.8rem;
      `}

      ${media.lessThan('small')`
        grid-template-columns: repeat(1, 1fr);
      `}
    }
`

export const ListItem = styled.li<ListItemProps>`
  ${({ isFull }) => css`
    position: relative;
    ${isFull && css`
      grid-column: 2 / 4;
      grid-row: span 2;
    `}

    ${media.lessThan('medium')`
      ${isFull && css`
        grid-column: 2 / 2;
        grid-row: span 1;
      `}
    `}

    ${media.lessThan('small')`
      ${isFull && css`
        grid-column: 1 / 1;
        grid-row: span 1;
      `}
    `}
  `}
`

