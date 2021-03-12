import styled, { keyframes, css } from "styled-components";

type ImageProps = {
  showSkeleton: boolean;
}

const skeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  border-radius: 8px;
  animation: ${skeletonAnimation} 1.5s ease infinite;
  background-image: linear-gradient(90deg, #eee 0px, #e9e4f0 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
`

export const Image = styled.img<ImageProps>`
${({ showSkeleton }) => css`
    opacity: ${showSkeleton ? '0' : '1'};
    border-radius: 8px;
  `}
`

