import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getFiltered,
  GET_FILTERED_ISSUED,
  GET_FILTERED_REFUEL,
  GET_FILTERED_WAREHOUSE, GET_FILTERED_SCRAPPED,
} from "../actions/operationsActions";
import MonitorContent from "../component/MonitorContent";

export const Monitor = () => {
  const dispatch = useDispatch();
  useEffect(() => (document.title = "Учет картриджей - Монитор"));
  useEffect(() =>
    dispatch(getFiltered("issued=false&toRefuel=false&scrapped=false", GET_FILTERED_WAREHOUSE))
  );
  useEffect(() =>
    dispatch(getFiltered("issued=true&toRefuel=false&scrapped=false", GET_FILTERED_ISSUED))
  );
  useEffect(() => dispatch(getFiltered("toRefuel=true&scrapped=false", GET_FILTERED_REFUEL)));
  useEffect(() => dispatch(getFiltered("issued=false&toRefuel=false&scrapped=true", GET_FILTERED_SCRAPPED)));

  return <MonitorContent />;
};

export default Monitor;
