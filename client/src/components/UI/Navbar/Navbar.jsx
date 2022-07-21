import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
/**
 *@description
 * все страницы которые будут в навигации.
 */
function Navbar() {
  return (
    <div className="left">
      <ul className="ul">
        <li className="li"><Link className="a" to="/">Главная</Link></li>
        <li className="li"><Link className="a" to="/oshs">ОШС</Link></li>
        <li className="li"><Link className="a" to="/resources">Ресурсы</Link></li>
        <li className="li"><Link className="a" to="/medicinesall">Мп</Link></li>
        <li className="li"><Link className="a" to="/liquid">Жидкость</Link></li>
        <li className="li"><Link className="a" to="/tasks">Задания</Link></li>
        <li className="li"><Link className="a" to="/redd">СВОД</Link></li>
        <li className="li"><Link className="a" to="/extract">Выписка</Link></li>
        <li className="li"><Link className="a" to="/medicines">Медикаменты</Link></li>
        <li className="li"><Link className="a" to="/treatment">Лечение</Link></li>
        <li className="li"><Link className="a" to="/mpe">МПЭ</Link></li>
        <li className="li"><Link className="a" to="/nraregister">Реестр НРА</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
