import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
const HomePage = lazy(() => import("../../Pages/Home/Home"));
const TweetsPage = lazy(() => import("../../Pages/Tweets/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
