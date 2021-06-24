import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Menu = () => {
  return (
    <ListGroup as='ul' variant='flush'>
      <ListGroup.Item as='li'>
          <Link to="/" className="btn btn-primary btn-block active">
          Монитор
        </Link>  
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/operation" className="btn btn-primary btn-block">
          Операции
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/warehouse" className="btn btn-primary btn-block">
          Склад
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/reports" className="btn btn-primary btn-block">
          Отчёты
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/settings" className="btn btn-primary btn-block">
          Настройки
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
