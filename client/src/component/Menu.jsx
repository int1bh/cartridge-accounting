import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";


const Menu = () => {
  return (
    <ListGroup as='ul' variant='flush'>
      <ListGroup.Item as='li'>
          <Link to="/" className="menu-item">
          Монитор
        </Link>  
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/operation" className="menu-item">
          Операции
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/warehouse" className="menu-item">
          Склад
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/reports" className="menu-item">
          Отчёты
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/settings" className="menu-item">
          Настройки
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
