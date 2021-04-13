import styled from 'styled-components';
import { FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const FooterContainer = styled.div`
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0 2rem;
`;

export const SocialMedia = styled(Container)`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: 'Open Sans Regular';
  font-size: 30px;
  margin-left: 20px;
`;

export const SocialIcon = styled(FaTruck)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  color: rgb(175, 175, 175);
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
