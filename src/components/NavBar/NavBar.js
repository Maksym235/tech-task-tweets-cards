import { NLink, Conteriner } from "./NavBar.styled";
export function NavBar() {
  return (
    <Conteriner>
      <NLink to="/">Home</NLink>
      <NLink to="/tweets" state={{ from: "/" }}>
        Tweets
      </NLink>
    </Conteriner>
  );
}
