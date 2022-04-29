import { Alert } from "../components/layout/Alert";
import { useAlertCtx } from "../context/alert/AlertContext";
import { UserResults } from "../components/users/UserResults";
import { UserSearch } from "../components/users/UserSearch";

export const Home = () => {
  const { alert } = useAlertCtx();
  return (
    <>
      {alert && <Alert message={alert.message} />}
      <UserSearch />
      <UserResults />
    </>
  );
};
