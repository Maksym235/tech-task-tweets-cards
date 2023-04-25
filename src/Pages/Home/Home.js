import { useState, useEffect } from "react";
import Logo from "../../assets/logo/Vector.svg";
import { AiOutlineSmile } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {
  Conteiner,
  Title,
  LinkToTweets,
  TitleWrapper,
  SideBlockWrapper,
  Description,
  DescpWrapper,
  CardWrapper,
  Card,
  LogoSt,
  Elips,
  Avatar,
  TextWrapper,
  Text,
  Btn,
} from "./Home.styled";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Conteiner>
      {isLoaded && (
        <>
          <TitleWrapper>
            <Title>
              Welcome
              <AiOutlineSmile />
            </Title>
          </TitleWrapper>
          <DescpWrapper>
            <SideBlockWrapper>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique aspernatur magni aliquid quae laboriosam reiciendis
                corrupti fuga cumque pariatur debitis, sed magnam accusamus sunt
                quia molestias deserunt adipisci ipsa rem?
              </Description>
              <LinkToTweets to="/tweets" state={{ from: location }}>
                Go to tweets page <BsArrowRight />
              </LinkToTweets>
            </SideBlockWrapper>
            <CardWrapper>
              <Card>
                <LogoSt src={Logo} alt="logo" />
                <Elips>
                  <Avatar></Avatar>
                </Elips>
                <TextWrapper>
                  <Text>Tweets</Text>
                  <Text>followers</Text>
                </TextWrapper>
                <Btn>follow</Btn>
              </Card>
            </CardWrapper>
          </DescpWrapper>
        </>
      )}
    </Conteiner>
  );
}
