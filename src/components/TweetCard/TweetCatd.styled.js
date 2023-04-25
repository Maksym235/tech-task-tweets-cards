import styled from "styled-components";
import Photo from "../../assets/CardPhoto/picture1.png";

export const Card = styled.div`
 position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\
  background-image: url(${Photo}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%) ;
    background-position: 50% 10%;
    background-repeat: no-repeat;
    bacground-size: cover;

    transition: transform 0.3s cubic-bezier(.42,.44,.83,.67) ;
    &:hover{
      transform: scale(1.05)
    }
     &::before {
    content: "";
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }


`;

export const LogoSt = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  display: block;
`;

export const Elips = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 175px;
  border-radius: 50px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 62px;
  height: 62px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #5736a3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

export const Img = styled.img`
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50px;
  background-color: transarent;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;
export const Text = styled.p`
  margin: 0;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  padding: 14px 56px;
  gap: 6px;

  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);

  background: ${(props) => (props.isFollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
