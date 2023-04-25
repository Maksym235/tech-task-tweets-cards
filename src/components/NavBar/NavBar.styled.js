import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Conteriner = styled.div`
  display: flex;
  margin-right: 20px;
  gap: 5px;
`;

export const NLink = styled(NavLink)`
  dispay: flex;
  padding: 3px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #50566e;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);
  &.active {
    background: #5cd3a8;
  }
`;
