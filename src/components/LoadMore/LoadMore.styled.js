import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 14px 28px;
  gap: 6px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);
  &:hover {
    background: #bcaccc;
  }
`;
