import { useNavigate } from "react-router-dom";
import { UserActionTypes, useUserDispatch } from "../UserContext";

import { useEffect } from "react";

export const Logout = () => {
  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: UserActionTypes.Logout });
    navigate("/");
  }, []);
  return <></>;
};
