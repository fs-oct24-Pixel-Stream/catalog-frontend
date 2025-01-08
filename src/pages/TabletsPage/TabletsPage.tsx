import './TabletsPage.scss'
import { Outlet } from "react-router"

export const TabletsPage = () => {
  return (
    <>
      <div>Tablets</div>
      <Outlet />
    </>
  )
}