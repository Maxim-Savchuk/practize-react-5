import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  padding: 10px 30px;
  width: 320px;
  border: 2px solid grey;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  border: 2px solid grey;
  outline: none;
  padding: 3px 6px;
  width: 240px;
  height: 20px;
  &:hover,
  &:focus {
    border: 2px solid hotpink;
  }

`;

export const Button = styled.button`
  height: auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  &:hover{
    background-color: grey;
    color: hotpink;
  }
`;