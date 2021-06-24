import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { viewSubdivision } from "../actions/subdivisionActions";


export const Monitor = (props) => {
    const dispatch = useDispatch()
    const sub = useSelector(state => state.subdivision.subdivision)
    //console.log(sub);
    
  return (
    <div>
      <div>
        <div className="row s1">
        <ul className="right">
            <li><button
            onClick={() => dispatch(viewSubdivision())}
            >click</button></li>
        <li><a href="#!" className="btn-floating" ><i className="medium material-icons">autorenew</i></a></li>
      </ul>
        </div>
      </div>
      
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
