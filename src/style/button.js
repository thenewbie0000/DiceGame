import styled from "styled-components"

export const Button = styled.button`
  border-radius: 5px;
  background: #000;
  width: 220px;
  padding: 10px 18px;
  color: #fff;
  border: none;
  font-size: 16px;
  border: 1px solid traansparent;

  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
  &:active{
    border: 1px solid black;
    color: black;
    background-color: #fff;
  }
`

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;


  &:active{
    border: 1px solid transparent;
    color: white;
    background-color: #000;
  }
`