import "./PhonesPage.scss"
import { Outlet } from "react-router";

export const PhonesPage = () => {
  return (
    <>
      <div>Phones</div>
      <Outlet />
    </>
  );
}