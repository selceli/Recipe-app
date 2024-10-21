
import React, { useEffect } from "react";
import {useUserDispatch, UserActionTypes} from '../../../UserContext';
import {useNavigate} from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { UserActionTypes, useUserDispatch } from "../../../UserContext";
import "./styles.css";
import { useEffect } from "react";


export const Logout = () => {
  const dispatch = useUserDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch({type: UserActionTypes.Logout});
    navigate('/');
  }, []);

  return (<></>);

  useEffect(() => {
    dispatch({ type: UserActionTypes.Logout });
    navigate("/");
  }, []);
  return <></>;

};
