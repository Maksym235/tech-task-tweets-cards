import {
  Card,
  Text,
  Btn,
  TextWrapper,
  LogoSt,
  Elips,
  Avatar,
  Img,
} from "./TweetCatd.styled";
import Logo from "../../assets/logo/Vector.svg";
import { useState } from "react";
export function TweetCard({
  user: { id, followers, tweets, avatar },
  onClick,
  isFollowing,
}) {
  const [isFollow, setIsFollow] = useState(isFollowing);
  const UIfollowers = isFollow
    ? (followers + 1).toString()
    : followers.toString();
  const formattedFollowers = Number(UIfollowers).toLocaleString("en-US");
  const formatedTweets = Number(tweets).toLocaleString("en-US");
  const onFollow = () => {
    onClick(id);
    toggleFollow();
  };

  const toggleFollow = () => {
    setIsFollow((state) => !state);
  };
  return (
    <Card id={id}>
      <LogoSt src={Logo} alt="logo" />
      <Elips>
        <Avatar>
          <Img src={avatar} alt="avatar" />
        </Avatar>
      </Elips>
      <TextWrapper>
        <Text>Tweets: {formatedTweets}</Text>
        <Text>followers: {formattedFollowers}</Text>
      </TextWrapper>
      <Btn isFollow={isFollow} onClick={onFollow} type="button">
        {isFollow ? "following" : "follow"}
      </Btn>
    </Card>
  );
}
