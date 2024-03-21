import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../features/auth/UserContext";

const DefaultLayout = () => {
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

export default DefaultLayout;
