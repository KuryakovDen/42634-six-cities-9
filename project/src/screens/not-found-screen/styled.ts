import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CitiesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Error = styled.span`
  font-size: 28px;
  font-weight: 500;
  margin-right: 10px;
`;

export const RouteLink = styled(Link)`
  color: blueviolet;
  text-decoration: underline;
`;
