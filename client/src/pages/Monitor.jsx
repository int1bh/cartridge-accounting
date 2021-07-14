import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getFiltered,
  GET_FILTERED_ISSUED,
  GET_FILTERED_REFUEL,
  GET_FILTERED_WAREHOUSE,
} from "../actions/operationsActions";
import MonitorContent from "../component/MonitorContent";

export const Monitor = () => {
  const dispatch = useDispatch();
  useEffect(() => (document.title = "Учет картриджей - Монитор"));
  useEffect(() =>
    dispatch(getFiltered("issued=false&toRefuel=false", GET_FILTERED_WAREHOUSE))
  );
  useEffect(() =>
    dispatch(getFiltered("issued=true&toRefuel=false", GET_FILTERED_ISSUED))
  );
  useEffect(() => dispatch(getFiltered("toRefuel=true", GET_FILTERED_REFUEL)));

  return <MonitorContent />;
};

export default Monitor;
