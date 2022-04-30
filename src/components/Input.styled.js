import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "date",
})`
  width: fit-content;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 14px;
  color: #222;
  outline: none;
  box-shadow: 0 0 0 1px #ccc;
  transition: all 0.3s;

  &:focus {
    border: 1px solid #aaa;
  }
`;
