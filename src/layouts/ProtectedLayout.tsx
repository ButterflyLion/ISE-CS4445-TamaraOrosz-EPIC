import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../features/auth/UserContext";

const ProtectedLayout = () => {
  const { user } = useUser();

  if (user === null) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
