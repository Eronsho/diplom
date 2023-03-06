import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Modal } from "../components/Modal";
import { PopOpContract } from "../components/PopOpContract";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { setActivet } from "../store/action-creators/user";
import { ACTIVATE_ROUTE, ADD_NEW_CONTRACT, POPUP_ROUTE } from "../utils/consts";

const PopUp: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const isLocation = location.pathname;
  const { user } = useTypeSelector((state) => state.user);
  switch (isLocation) {
    case POPUP_ROUTE:
      return (
        <>
          <Modal />
        </>
      );
    case ADD_NEW_CONTRACT:
      return (
        <>
          <PopOpContract />
        </>
      );

    default:
      return <></>;
  }
};
export { PopUp };
