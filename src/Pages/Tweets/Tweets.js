import { TweetsList } from "../../components/TweetsList/TweetsList";
import { useLocation } from "react-router-dom";
import { BackLink, Conteiner } from "./Tweets.styled";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { SelectFollow } from "../../components/Select/Select";
export default function Tweets() {
  const [selectValue, setSelecValue] = useState("all");
  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state.from ?? "/";

  const onChange = (value) => {
    setSelecValue(value);
  };
  return (
    <div>
      <Conteiner>
        <BackLink to={backLinkHref}>
          <BsBoxArrowLeft /> Back to home
        </BackLink>
        <SelectFollow onChange={onChange} />
      </Conteiner>
      <TweetsList selectValue={selectValue} />
    </div>
  );
}
