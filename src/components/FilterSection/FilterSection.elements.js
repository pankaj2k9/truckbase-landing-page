import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Heading = styled.h1`
  margin: 0;
  text-align: left;
  line-height: 48px;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const SubHeading = styled.p`
  margin: 0;
  font-size: 2rem;
  text-align: left;
  line-height: 1.1;
  font-weight: normal;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'rgb(84, 84, 84)')};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Label = styled.label`
  color: #000000;
  font-weight: 500;
  line-height: 16px;
  font-size: 14px;
  margin-bottom: 8px;
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
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 10px 0px;
  }
`;

export const BtnWarpper = styled.div`
  padding: 10px 20px 0px;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    padding: 10px 0px 0px;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: rgb(39, 110, 241);
  color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  &:hover {
    background-color: rgb(16, 44, 96);
  }
`;
export const Error = styled.span`
  color: red;
`;
export const FilterSectionWarpper = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  max-width: 888px;
  padding: 44px 30px;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 16px;
  border-radius: 4px;
  margin: 74px auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FilterColumn = styled.div`
  margin-bottom: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Img = styled.img`
  max-width: 100%;
  margin-top: 50px;
`;

export const Terms = styled.p`
  color: rgb(84, 84, 84);
  line-height: 20px;
  font-weight: normal;
  font-size: 14px;
`;
