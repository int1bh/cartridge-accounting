import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { viewSubdivision } from "../actions/subdivisionActions";


export const Monitor = (props) => {
    const dispatch = useDispatch()
    const sub = useSelector(state => state.subdivision.subdivision)
    //console.log(sub);

    useEffect(() => document.title = 'Учет картриджей - Монитор')
    
  return (
    <div>
      <h1>Монитор</h1>
      <p>Страница в разработке</p>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
