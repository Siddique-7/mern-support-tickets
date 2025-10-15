import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const { user } = useSelector(state => state.auth); // get user from Redux

  return {
    loggedIn: !!user,       // true if user exists
    checkStatus: false      // no spinner needed
  };
};
