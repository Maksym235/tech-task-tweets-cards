import { useLocation } from "react-router-dom";
import { NLink, Conteriner } from "./NavBar.styled";
export function NavBar() {
  const location = useLocation();
  return (
    <Conteriner>
      <NLink to="/">Home</NLink>
      <NLink to="/tweets" state={{ from: location }}>
        Tweets
      </NLink>
    </Conteriner>
  );
}
