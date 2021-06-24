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
        <Link to="/issue" className="btn btn-primary btn-block">
          Выдать картриджи
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/returnwarehouse" className="btn btn-primary btn-block">
          Принять картриджи
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/torefuel" className="btn btn-primary btn-block">
          Заправить картриджи
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/returnrefuel" className="btn btn-primary btn-block">
          Принять с заправки
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/addcartridge" className="btn btn-primary btn-block">
          Добавить картридж
        </Link>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <Link to="/trash" className="btn btn-primary btn-block">
          Утилизировать картриджи
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
