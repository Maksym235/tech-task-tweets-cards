import styled from "styled-components";
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3px;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: color 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);

  &:hover {
    color: #a30000;
  }
`;
