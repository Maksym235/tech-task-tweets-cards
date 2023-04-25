import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./SharedLayout.styled";
import { AppBar } from "../AppBar/AppBar";

export function SharedLayout() {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<div>loading ...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}
