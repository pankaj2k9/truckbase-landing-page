import styled from "styled-components";
import { Button } from "../../globalStyles";
export const Heading = styled.h1`
  margin: 24px 0px;
  font-size: 2rem;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Label = styled.label`
  color: #242424;
  margin-bottom: 1rem;
`;



export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #000;
  color: #242424;

  &::placeholder {
    color: #24242480;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const InputWarpper = styled.div`
  padding: 10px 20px;
  flex-direction: column;
  display: flex;
`;

export const SubmitButton = styled(Button)`
  margin-top:2rem;

`
export const Error = styled.span`
  color: red;
`