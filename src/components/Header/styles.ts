import styled from "styled-components";
import userIcon from '../../assets/images/user.svg'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 10%);
  background: #fff;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;

  a:last-child {
    &::after {
      content: '';
      width: 14px;
      height: 17px;
      display: inline-block;
      background: url(${userIcon}) no-repeat center center;
      margin-left: 0.8rem;
    }
  }
`

export const ListItem = styled.li``

