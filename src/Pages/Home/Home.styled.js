import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Photo from "../../assets/CardPhoto/picture1.png";
const fadeIn = keyframes`
  from {
    opacity: 0;
  transform: translateY(-100%);
  
  }
  to {
    opacity: 1;
  transform: translateY(0);
  }
`;

const fadeInLink = keyframes`
from{
opacity: 0;
transform: translateX(-100%)
}
to{
    opacity: 1;
    transform: translateX(0);
}

`;
const fadeInCard = keyframes`
from{
opacity: 0;
transform: translateX(+100%)
}
to{
    opacity: 1;
    transform: translateX(0);
}

`;
export const Conteiner = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
  text-transform: uppercase;
  color: #020202;
  animation: ${fadeIn} 1.5s ease-out;
`;
export const DescpWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const SideBlockWrapper = styled.div`
  animation: ${fadeInLink} 2s ease-out;
`;
export const Description = styled.p`
  width: 300px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #020202;
`;
export const LinkToTweets = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  padding: 5px;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #020202;
  border-radius: 20px;
  background: #ebd8ff;
  transition: background 0.3s cubic-bezier(0.42, 0.44, 0.83, 0.67);
  &:hover {
    background: #5cd3a8;
  }
`;
export const CardWrapper = styled.div`
  animation: ${fadeInCard} 2s ease-out;
`;
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
