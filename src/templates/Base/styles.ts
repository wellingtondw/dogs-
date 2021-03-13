import styled, { css } from "styled-components";

import { BaseProps } from './'

export const Wrapper = styled.div<Pick<BaseProps, 'hasPadding'>>`
  ${({ hasPadding }) => css`
    min-height: 100vh;
    ${hasPadding && css`
      padding: 8rem 0 11.6rem 0;
    `}
  `}
`
