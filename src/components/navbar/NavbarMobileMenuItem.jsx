import { NavLink } from 'react-router-dom';

const NavbarMobileMenuItem = ({ path, title, hide }) => {
     return (
          <div className="navbar-mobile-menu-item">
               <NavLink to={path} onClick={hide} className="navbar-mobile-menu-link">
                    {title}
               </NavLink>
          </div>
     );
};

export default NavbarMobileMenuItem;
