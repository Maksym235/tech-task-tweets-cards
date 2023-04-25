import { Header, Conteriner } from "./AppBar.styled";
import { NavBar } from "../NavBar/NavBar";
import Logo from "../../assets/logo/Vector.svg";
export function AppBar() {
  return (
    <Header>
      <Conteriner>
        <img src={Logo} alt="logo" />
      </Conteriner>
      <NavBar />
    </Header>
  );
}
