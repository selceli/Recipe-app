import React, { useEffect } from "react";
import {useUserDispatch, UserActionTypes} from '../../../UserContext';
import {useNavigate} from 'react-router-dom';

export const Logout = () => {
  const dispatch = useUserDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch({type: UserActionTypes.Logout});
    navigate('/');
  }, []);

  return (<></>);
};
