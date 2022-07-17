import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function useAuth() {
  return useContext(UserContext);
}

export default useAuth;
