import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../features/auth/UserContext";

const DefaultLayout = () => {
  const { user } = useUser();

  if (user !== null && user.userRole === "regular user") {
    return <Navigate replace to={"/dashboard"} />;
  }
  else if (user !== null && user.userRole === "admin") {
    return <Navigate replace to={"/admin-view"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
