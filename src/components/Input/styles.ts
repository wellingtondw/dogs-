import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  color: #333;

  > label {
    display: inline-block;
    margin-bottom: 0.8rem;
  }

  > input {
    border: 2px solid #eee;
    background: #eee;
    border-radius: 8px;
    width: 100%;
    padding: 1.4rem;
    outline: none;
    transition: 0.2s;
    color: #333;

    &:focus {
     border: 2px solid #fb1;
     box-shadow: 1px 0px 13px 1px rgba(255,187,17,0.3);
    }
  }


  &:hover {
    > input {
     border: 2px solid #fb1;
     box-shadow: 1px 0px 13px 1px rgba(255,187,17,0.3);
    }
  }
`
