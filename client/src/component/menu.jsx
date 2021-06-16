import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="collection">
            <Link to="/" className="collection-item">Монитор</Link>
            <Link to="/issue" className="collection-item">Выдать картриджи</Link>
            <Link to="/returnwarehouse" className="collection-item">Принять картриджи</Link>
            <Link to="/torefuel" className="collection-item">Заправить картриджи</Link>
            <Link to="/returnrefuel" className="collection-item">Принять с заправки</Link>
            <Link to="/addcartridge" className="collection-item">Добавить картридж</Link>
            <Link to="/trash" className="collection-item">Утилизировать картриджи</Link>
            <Link to="/subdivision" className="collection-item">Редактор отделений</Link>
            <Link to="/directory" className="collection-item">Редактор картриджей</Link>
            <Link to="/reports" className="collection-item">Отчёты</Link>
        </div>
    )
}
  
  export default Menu