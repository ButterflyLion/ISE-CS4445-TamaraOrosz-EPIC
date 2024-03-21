import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../features/auth/UserContext";

const ProtectedLayout = () => {
  const { user } = useUser();

  if (user === null) {
    return <Navigate replace to={"/"} />;
  } else if (user.userRole === "admin") {
    return <Navigate replace to={"/admin-view"} />;
  } else if (user.userRole === "regular user") {
    return <Navigate replace to={"/dashboard"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
