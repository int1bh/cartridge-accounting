import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
        <div className="row">
            <ul className="list-group list-group-flush btn-group">
                <li className="list-group-item"><Link to="/" className="btn btn-primary btn-menu">Монитор</Link></li>
                <li className="list-group-item"><Link to="/addcartridge" className="btn btn-primary">Добавить картридж</Link></li>
                <li className="list-group-item"><Link to="/subdivision" className="btn btn-primary">Справочник отделений</Link></li>
                <li className="list-group-item"><Link to="/directory" className="btn btn-primary">Справочник картриджей</Link></li>
                <li className="list-group-item"><Link to="/reports" className="btn btn-primary btn-menu">Отчёты</Link></li>
            </ul>
       </div>
    )
}
  
  export default Menu