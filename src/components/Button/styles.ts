import styled from 'styled-components'

export const Button = styled.button`
  background: #fb1;
  font-size: 1.6rem;
  padding: 1.4rem 2.2rem;
  border: none;
  border-radius: 0.4rem;
  min-width: 12rem;
  cursor: pointer;
  color: #764701;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  outline-color: #333;

  &:hover {
    background: rgba(255,187,17,0.9);
    box-shadow: 1px 0px 13px 1px rgba(255,187,17,0.3);
  }
`

